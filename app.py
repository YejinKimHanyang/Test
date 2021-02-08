from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def example():
    return render_template('example.naver_map.html')
 
if __name__ == "__main__":
    app.run(debug=True)