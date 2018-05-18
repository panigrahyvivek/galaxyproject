import csv
import numpy as np

'''
def opencsv():
    with open('oec.csv') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')
        for row in rows:
            print(row)
'''

def loadcsvtonparray():
    csv = np.genfromtxt('oec.csv', delimiter=',', skip_header=1, usecols=(0,2,13), filling_values=0)
    print('check')
    print(np.amax(csv[:,1], axis=0))
    print(csv[csv[:,1] > 200])

def main():
    loadcsvtonparray()


if __name__ == '__main__':
    main()
