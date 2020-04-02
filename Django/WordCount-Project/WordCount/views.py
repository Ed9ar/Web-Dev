from django.http import HttpResponse
from django.shortcuts import render
import operator

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def count(request):
    text = request.GET['fulltext']

    wordlist = text.split()
    count = len(wordlist)

    words = {}

    for word in wordlist:
        if word in words:
            words[word] += 1
        else:
            words[word] = 1
    
    words = sorted(words.items(), key=operator.itemgetter(1), reverse=True)
    print(text)
    return render(request, 'count.html',{'text':text, 'count':count, 'words':words})

