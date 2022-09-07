from TextServer import TextServer
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app, support_credentials=True)

text_server = TextServer()

@app.route('/')
@cross_origin(supports_credentials=True)
def hello_world():
    # text_server = TextServer()
    return jsonify('Hello, World!')

@app.route('/generate-start')
@cross_origin(supports_credentials=True)
def generate_start():
    text = text_server.generate_text()
    print("returned data: {}".format(text))
    return jsonify(text)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8000, debug=True)

# def main():
#     text_server = TextServer()
#     text_server.generate_text()
#
# if __name__ == '__main__':
#     main()