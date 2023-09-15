from numpy import vectorize 
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask
app=Flask(__name__) 

vectorize = lambda Text: TfidfVectorizer().fit_transform(Text).toarray()
similarity = lambda doc1, doc2: cosine_similarity([doc1, doc2])
sample_files=["one","two"]
vectors = vectorize(["hello this is sathwik","hi this is ruthwik"])

def check_plagiarism():
    score = similarity(vectors[0],vectors[1])
    return score[0][1]

@app.route("/")
def home():
    return str(check_plagiarism())

if(__name__=="__main__"):
    app.run()