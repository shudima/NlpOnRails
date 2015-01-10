from textblob import TextBlob
import sys

text = sys.argv[1]
blob = TextBlob(text)


polarity_sum = 0.0;
count = 0;

for sentence in blob.sentences:
       polarity_sum = polarity_sum + sentence.sentiment.polarity
       count = count + 1;


polarity_avg = polarity_sum / count

print(polarity_avg)


