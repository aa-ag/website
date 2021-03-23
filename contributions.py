###--- IMPORTS ---###
from bs4 import BeautifulSoup
import urllib.request

###--- FUNCTIONS ---###
github = 'https://github.com/aa-ag'

page = urllib.request.urlopen(github)

soup = BeautifulSoup(page, 'html.parser')

countributions = soup.find(
    'div', attrs={'class': 'border py-2 graph-before-activity-overview'})

print(countributions)

###--- DRIVER CODE ---###
if __name__ == "__main__":
    pass
