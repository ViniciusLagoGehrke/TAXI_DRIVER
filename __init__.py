##Algorithm to creat TAXI list for each route acording to location 
##1 Count how many address and set minimum number of TAXIS
##2.1 Define furthers 4 End Point from each direction (N,S,W,E)TAXI (further from Start Point or apart from each other)
##2.2 Think of Clusters (i.e: 3 adreess on Matosinhos make on end point not three)
##3 Arrange Dictionaries adding additionals middle points on every route with maximum of 3 additionals points
#print Dictionary with every Names, adreess and TAXI number

#import osmnx as ox
import pandas as pd
from geopandas import GeoDataFrame
from shapely.geometry import Point
import fiona
#import leaflet

##define map and start point
#porto_street = ox.graph_from_place('Porto, Portugal', network_type = 'drive')
#prt_strt_projected = ox.project_graph(porto_street)
#ox.plot_graph(prt_strt_projected)

#get endpoints on CSV and get coordenates
df = pd.read_csv('taxi.csv')

##function to extract coordinates from address in OSM
#def coord():

#result = [coord(x,y) for x, y in zip(df['ADDRESS'], df['COORDINATES'])]

print(df)
#gdf = GeoDataFrame(df.)

#endpoints['geometry'] = endpoints.apply
