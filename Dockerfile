FROM python:3.11

WORKDIR /app

ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt --upgrade

ADD . .
# EXPOSE 8080

CMD ["python", "-m","main","-H","0.0.0.0:8080"]
