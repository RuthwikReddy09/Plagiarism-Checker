from numpy import vectorize 
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask,request,jsonify
from flask_cors import CORS

app=Flask(__name__) 
cors = CORS(app)

vectorize = lambda Text: TfidfVectorizer().fit_transform(Text).toarray()
similarity = lambda doc1, doc2: cosine_similarity([doc1, doc2])

def check_plagiarism(t1,t2):
    vectors = vectorize([t1,t2])
    score = similarity(vectors[0],vectors[1])
    return score[0][1]

@app.route("/",methods=["GET","POST"])
def home():
    if request.method == "POST":
        jsonData = request.get_json()
        return jsonify(check_plagiarism(jsonData['t1'],jsonData['t2']))

if(__name__=="__main__"):
    app.run(debug=True)