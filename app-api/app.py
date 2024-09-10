from dotenv import load_dotenv
import os

load_dotenv()

from mw import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
