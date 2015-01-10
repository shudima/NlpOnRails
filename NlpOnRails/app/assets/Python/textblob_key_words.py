from textblob import TextBlob
import sys

text = sys.argv[1]
blob = TextBlob(text)

print(blob.noun_phrases)


