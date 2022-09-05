import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  # Trying to reduce tensorflow warnings
import nltk
import tensorflow as tf

# specific machine learning functionality
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from tensorflow import keras
from tensorflow.keras.models import Model, Sequential
from tensorflow.keras.layers.experimental.preprocessing import TextVectorization
from tensorflow.keras.utils import to_categorical

from transformers import BertTokenizer, TFBertForSequenceClassification, BertConfig
from transformers import GPT2Tokenizer, TFGPT2LMHeadModel

class TextServer:

    def __init__(self, model_path='../data/20220213_074247/', tokeninzer_path='../data/20220213_074247/'):
        self.model = TFGPT2LMHeadModel.from_pretrained(model_path)
        self.tokenizer = GPT2Tokenizer.from_pretrained(tokeninzer_path)

    def generate_text(self, input_text="", max_length=75):
        # Input text
        input_text = input_text

        if input_text == "":
            input_text = self.tokenizer.bos_token

        # Tokenize Input
        input_ids = self.tokenizer.encode(input_text, return_tensors='tf')
        print("input_ids", input_ids)

        # Generate outout
        outputs = self.model.generate(
            input_ids,
            do_sample=True,
            max_length=max_length,
            top_p=0.8,
            top_k=0
        )

        print("Generated text:")
        print(self.tokenizer.decode(outputs[0], skip_special_tokens=True))