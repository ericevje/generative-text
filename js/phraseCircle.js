class PhraseCircle{
    constructor(_parentElement, _data){
        this.parentElement = _parentElement;
        this.data = _data;
        this.animated = false;

        this.initVis();
    }

    initVis(){
        let vis = this;

        vis.margin = { top: 40, right: 40, bottom: 40, left: 40 };

        vis.width = document.getElementById(vis.parentElement).getBoundingClientRect().width - vis.margin.left  - vis.margin.right;
        vis.height = vis.width;
        // vis.height = 500 - vis.margin.top - vis.margin.bottom;

        vis.svg = d3.select("#" + vis.parentElement)
            .append("svg")
            .attr("width", vis.width)
            .attr("height", vis.height)
            .attr("id", "svg-phrase-circle");

        vis.wrangleData();
    }

    wrangleData(phrase_length=150){
        let vis = this;
        //TODO: Choose to truncate phrase nearest the next end of sentence that is nearest the proposed phrase length
        let truncated_phrase = vis.data.substring(0, phrase_length);

        vis.displayData = truncated_phrase;

        // Update the visualization
        vis.calculate_radius();
        vis.updateVis();
    }

    updateVis(){
        let vis = this;

        // Circular arc path
        vis.arcPath = d3.path();
        // vis.arcPath.moveTo(235, 235);
        //TODO: Make center variable to center of svg
        //TODO: Make radius variable to font size and number of letters.
        vis.arcPath.arc(235, 235, vis.radius, 0, 360)
        vis.arcPath.closePath();

        vis.svg.append("defs").append("path")
            .attr("id", "curve")
            .attr("d", vis.arcPath)
            .attr("fill", 255)
            .attr("opacity", .1);

        vis.svg.append("text")
            .attr("id", "curve-text")
            .append("textPath")
            .attr("xlink:href", "#curve")
            .text(vis.displayData);

        vis.svg.append("use")
            .attr("id", "curve-line")
            .attr("xlink:href", "#curve");
    }

    calculate_radius(){
        let vis = this;
        vis.temp_text = vis.svg.append("text")
            .text(vis.displayData)
            .attr("opacity", 0);

        let circumfrence = vis.temp_text.node().getBBox().width;
        vis.radius = circumfrence / 6.28;
        console.log(vis.radius);
    }
}