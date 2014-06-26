#
# bioinformatics 3, wintersemester 89
# all code by Mathias Bader
#	Modified by Dan Pipe-Mazo for Caltech Ditch Day, but not much.
#


import sys, os, string, random, time, copy, json
from math import sqrt
# gives tk namespace for graphical output
import Tkinter as tk

hub_dict = {
    #Hub            # Links
    "Iron Man"      : ["Justin Hammer", "Tony Stark", "Jarvis", "Arc Reactor", "Mandarin", "War Machine", 'Marvel'],
    "Mandarin"      : ["Orange", "Chinese"],
    "Chinese"       : ["New Year", "Finger Trap", "Checkers", "Zodiac", "Language"],
    "Language"      : ["Spanish", "German", "French", "English", "Japanese", "Programming"],
    "Programming"	: ["Perl", "Java", "C++", "Python", "Fortran", "PHP", "Ruby", "Assembly"],
    "Game"          : ["Checkers", "Chess", "Video Game", "Basketball", "Baseball", "of Thrones", "Boy", "Theory"],
    "Chess"         : ["Deep Blue", "Checkmate", "Rook", "Knight", "Bishop", "Pawn", "Checkers"],
    "Knight"        : ["Duke", "Baron", "Earl", "of the Round Table"],
    "Duke"          : ["Penn", "Yale", "Harvard", "Princeton", "Stanford", "Caltech", "Basketball"],
    "IBM"           : ["Watson", "Deep Blue", "Computer", "Silicon Valley"],
    "Baseball"      : ["Dodgers", "Yankees", "Red Sox", "Angels", "Giants", "Phillies"],
    "Arc Reactor"   : ["Palladium"],
    "Vibranium"     : ["Arc Reactor", "Element", "Metal"],
    "Element"       : ["Palladium", "Oxygen", "Carbon", "Gold", "Iron", "Magnesium","Silicon"],
    "Carbon"        : ["Dating", "Copy", "Dioxide", "Graphite", "Diamond"],
    "Ruby"          : ["Red"],
    "Pepper"        : ["Tony Stark", "Jalapeno", "Bell", "Cayenne", "Green", "Red Hot Chili", "Salt", "Gwyneth Paltrow"],
    "Green"         : ["Lantern", "Goblin", "Emerald"],
    "Gem"		    : ["Emerald", "Ruby", "Diamond", "Sapphire"],
    "Blue"			: ["Sapphire"],
    "Lantern"       : ["Festival", "Flashlight", "Lamp", "Lightbulb", "Torch"],
    "Rock Band"     : ["Video Game", "Red Hot Chili", "Aerosmith", "Nirvana", "Rolling Stones", "Iron Maiden", "Metallica"],
    "Red"			: ["Red Sox", "Red Hot Chili", "Apple", "Red Robin"],
    "Metal"         : ["Vibranium","Gold","Iron", "Palladium", "Metallica", "Iron Maiden"],
    "Orange"        : ["Apple", "Peach", "Banana", "Watermelon", "Grape"],
    "Apple"         : ["Silicon Valley", "Macintosh", "Jobs", "Wozniak", "Cupertino", "Computer", "iPhone"],
    "California"    : ["Cupertino", "State", "Silicon Valley", "Caltech"],
    "Silicon Valley": ["Silicon", "Paypal", "Google", "Microsoft", "Tesla", "Cupertino", "Facebook", "Stanford"],
    "Movie"         : ["Iron Man", "Jobs", "Pixar", "Marvel", "Popcorn", "Trailer", "Director", "Artificial Intelligence"],
    "Emma"          : ["Stone", "Watson", "Roberts", "Frost"],
    "Robert Downey Junior" : ["Roberts", "Iron Man", "Sherlock Holmes", "Tropic Thunder"],
    "Watson"        : ["Computer", "Sherlock Holmes", "Crick", "Emma", "IBM"],
    "Roberts"       : ["Dread Pirate", "Emma", "Julia", "John"],
    "Julia"         : ["Child", "Stiles", "Andrews"],
    "Pixar"         : ["Jobs", "Cars", "Toy Story", "Finding Nemo", "Monsters, Inc.", "The Incredibles", "Movie"],
    "Cars"          : ["BMW", "Audi", "Toyota", "Honda", "Mazda", "Tesla"],
    "Scientist"		: ["Tesla", "Watson", "Einstein", "Edison", "Bell", "Curie", "Darwin", "Peter Parker", "Bruce Banner", "Tony Stark", "Doctor Octopus"],
    "Bruce Banner"	: ["Hulk"],
    "Edison"		: ["Lightbulb"],
    "Elon Musk"     : ["Tesla", "SpaceX", "Paypal", "Hyperloop", "Tony Stark", "Penn"],
    "Avengers"      : ["Iron Man", "Thor", "Hulk", "Captain America", "Hawkeye", "Black Widow", "Movie", "Marvel", "Zodiac", "Wolverine", "Ultron", "Coulson"],
    "Marvel"        : ["Avengers", "X-Men", "Spider-Man", "Captain America", "Hulk", "Thor", "Frost"],
    "X-Men"         : ["Professor X", "Cyclops", "Iceman", "Angel", "Mystique", "Storm", "Wolverine", "Magneto"],
    "Color"		    : ["Green", "Orange", "Red", "Blue", "Yellow", "Purple", "Pink", "Deep Blue", "Magenta", "Teal"],
    "Green"			: ["Hulk"],
    "Computer"		: ["Deep Blue", "Macintosh", "Microsoft", "Eniac", "Windows", "Facebook", "Programming"],
    "Eniac"			: ["Penn", "Fortran"],
    "Doctor"		: ["Pepper", "Doctor Octopus"],
    "Spider-Man"	: ["Doctor Octopus", "Avengers", "Peter Parker"],
    "Entrepreneur"	: ["Tony Stark", "Elon Musk", "Justin Hammer", "Jobs", "Edison", "Bruce Wayne", "Bill Gates"],
    "Artificial Intelligence" : ["Jarvis", "Deep Blue", "Google", "Ultron", "Watson"],
    "Tony Stark"	: ["Stark Tower"],
    "SHIELD"		: ["Avengers", "Nick Fury", "Maria Hill", "Coulson", "Knight", "Agents of SHIELD"],
    "Magic"			: ["Mandarin", "Penn and Teller", "Houdini"],
    "Penn"			: ["Penn and Teller"],
    "Dark Knight"	: ["Batman", "Knight", "Bruce Wayne"],
    "Microsoft"		: ["Windows", "Bill Gates"],
    "DC"			: ["Lantern", "Dark Knight", "Batman", "Marvel"],
    "Video Game"	: ["Minecraft", "Halo"],
    "PHP"			: ["Facebook"],
    "Cobie Smulders": ["Robin", "Maria Hill", "How I Met Your Mother"],
    "Robin"			: ["Red Robin", "Batman"],
    "Sports"		: ["Game", "Baseball", "Basketball", "Football", "Soccer", "Hockey", "Tennis", "Golf"],
    "Japan"			: ["Baseball", "Japanese", "Samurai", "Sushi"],
    "TV Shows"		: ["Agents of SHIELD", "How I Met Your Mother", "Breaking Bad", "Mad Men"]
}

center_distance = 10.0			# the distance from the middle of the screen to each border
scaling_factor = 1.0			# the zoom-factor (the smaller, the more surface is shown)
zooming = 0						# is the application zooming right now?
zoom_in_border = 1.0			# limit between graph and screen-border for zooming in
zooming_out = 0
circle_diameter = 20			# the diameter of the node-circles
timestep = 0
thermal_energie = 0.0			# set this to 0.3 or 0.0 to (de)activate thermal_energie
all_energies = []				# list of all energies sorted by time
highest_energy = 0				# the highest energie occuring
energie_change_limit = 0.0000001	# if energie doesn't change more than this, process is stoped
velocity_maximum = 0.05
friction = 0.0005				# is subtracted from the velocity at each timestep for stop oscillations
show_energies_in_background = 1
status_message = ''
grabed_node = ''
grabed_component = ''
dont_finish_calculating = 1
show_energie_in_background = 1
show_textinformation_in_background = 1

#screen properties
c_width = 1000
c_height = 600
border = 20

filename = "iron_man_data.txt"


if (len(sys.argv) == 2 and sys.argv[1] != ""):
	filename = sys.argv[1]


# Class for Nodes
class Node:
	def __init__(self, node_id):
		self.id = node_id		# id (as an integer for example)
		self.neighbour_ids = []	# list of the ids of the neighbours
		self.degree = 0			# number of neighbours
		self.coordinate_x = 0
		self.coordinate_y = 0
		self.force_coulomb = 0
		self.force_harmonic = 0
		self.cc_number = 0 		# the number of the connected component (0 if not assigned yet)
		self.cc_centers = []
		self.velocity = [0,0]	# instead of replacing the nodes, change its velocity to produce inertia
		self.movable = 1
	def getNeighbours(self):
		return self.neighbour_ids
	def getDegree(self):
		return self.degree
	def getId(self):
		return self.id
	def setNeighbour(self, node_id):
		self.neighbour_ids.append(node_id)
		self.degree += 1
	def deleteNeighbour(self, node_id):
		self.neighbour_ids.remove(node_id)
		self.degree -= 1

# Class for graph
class Graph:
	def __init__(self):
		# build an empty graph
		self.nodes = [] # list of Node-objects
		self.edges = [] # list of tupels (node1-id, node2-id) where node1-id is always smaller than node2-id
		self.last_added_id = -1
		self.connected_components_count = 0
		self.overall_energie = 0
		self.overall_energie_difference = 1000
		self.calculation_finished = 0
		self.nodes_dumped = False

	def addNode(self, node_id):
		# adds a node to the graph
		if node_id == self.last_added_id: return	# speed up adding of same ids consecutively
		for x in self.nodes:
			if x.getId() == node_id:
				return
		new_node = Node(node_id)
		if (node_id == "Iron Man"):
			new_node.movable = 0
		self.nodes.append(new_node)
		self.last_added_id = node_id

	def addEdge(self, node_id_1, node_id_2):
		# adds an edge between two nodes
		if node_id_1 != node_id_2 and node_id_1 >= 0 and node_id_2 >= 0 and not self.isEdge(node_id_1, node_id_2):
			if node_id_1 < node_id_2:
				self.edges.append((node_id_1, node_id_2))
			else:
				self.edges.append((node_id_2, node_id_1))
			# search for the two node-objects with fitting ids
			node1 = self.getNode(node_id_1)
			node2 = self.getNode(node_id_2)
			node1.setNeighbour(node_id_2)
			node2.setNeighbour(node_id_1)

	def deleteEdge(self, (node_id_1, node_id_2)):
		# deletes the edge between node_id_1 and node_id_2
		if node_id_1 > node_id_2:
			# switch the two node-ids (edges are always saved with smaller id first)
			tmp = node_id_1
			node_id_1 = node_id_2
			node_id_2 = tmp
		self.edges.remove((node_id_1, node_id_2))
		node1 = self.getNode(node_id_1)
		node1.deleteNeighbour(node_id_2)
		node2 = self.getNode(node_id_2)
		node2.deleteNeighbour(node_id_1)

	def nodesList(self):
		# returns the list of ids of nodes
		list_of_ids = []
		for node in self.nodes:
			list_of_ids.append(node.id)
		return list_of_ids

	def edgesList(self):
		# returns the list of edges ([(id, id), (id, id), ...]
		return self.edges

	def degreeList(self):
		# returns a dictionary with the degree distribution of the graph
		degrees = {}
		for x in self.nodes:
			if degrees.has_key(x.degree):
				degrees[x.degree] += 1
			else:
				degrees[x.degree] = 1
		return degrees

	def countNodes(self):
		# prints the number of nodes
		return len(self.nodes)

	def countEdges(self):
		# prints the number of nodes
		return len(self.edges)

	def printNodes(self):
		# prints the list of nodes
		to_print = '['
		count = 0
		for x in self.nodes:
			to_print = to_print + str(x.getId()) + ','
			count += 1
			if count > 200:
				print to_print,
				to_print = ''
				count = 1
		if count > 0: to_print = to_print[:-1]
		to_print = to_print + ']'
		print to_print

	def printEdges(self):
		# prints the list of edges
		to_print = '['
		count = 0
		for (n1, n2) in self.edges:
			to_print = to_print + '(' + str(n1) + ',' + str(n2) + '), '
			count += 1
			if count > 200:
				print to_print,
				to_print = ''
				count = 1
		if count > 0: to_print = to_print[:-2]
		to_print = to_print + ']'
		print to_print

	def printData(self):
		# prints number of nodes and edges
		print 'graph with', len(self.nodes), 'nodes and', len(self.edges), 'edges'
		print
		for node in self.nodes:
			print 'x coordinate of', node.id, 'is', node.coordinate_x
			print 'y coordinate of', node.id, 'is', node.coordinate_y
			print

	def isEdge(self, node_id_1, node_id_2):
		if node_id_1 > node_id_2:
			# switch the two node-ids (edges are always saved with smaller id first)
			tmp = node_id_1
			node_id_1 = node_id_2
			node_id_2 = tmp
		# checks if there is an edge between two nodes
		for x in self.edges:
			if x == (node_id_1, node_id_2): return True
		return False

	def getNode(self, node_id):
		# returns the node for a given id
		for x in self.nodes:
			if x.getId() == node_id:
				return x

	def getNodes(self):
		return self.nodes

	def SetRandomNodePosition(self):
		# sets random positions for all nodes
		for node in self.nodes:
			if (node.id != "Iron Man"):
				node.coordinate_x = random.random() * center_distance - (center_distance/2)
				node.coordinate_y = random.random() * center_distance - (center_distance/2)

	def paintGraph(self):
		# (re)Paints the graph on the surface of the window

		# clear the screen
		for c_item in c.find_all():
			c.delete(c_item)

		# plot the energie vs time in the background of the window
		if show_energie_in_background == 1:
			if show_energies_in_background == 1:
				global all_energies
				energies_count = len(all_energies)
				# only show the last 200 energies at maximum
				if energies_count > 200:
					start_point = energies_count - 200
				else:
					start_point = 0
				for i in range(start_point, energies_count):
					c.create_rectangle(border+(c_width)/(energies_count-start_point)*(i-start_point), border+c_height-(c_height/highest_energy*all_energies[i]), border + (c_width)/(energies_count-start_point)+(c_width)/(energies_count-start_point)*(i-start_point), c_height+border, fill="#eee", outline="#ddd")




		# draw the coordinate system with the center
		c.create_line (border, c_height/2+border, (c_width+border), c_height/2+border, fill="#EEEEEE")
		c.create_line (c_width/2+border, border, c_width/2+border, c_height+border*2+border, fill="#EEEEEE")

		# Output info via text
		if show_textinformation_in_background == 1:
			# opened file
			c.create_text(20, 40, anchor=tk.SW, text=str('opened file: ' +filename), font=("Helvectica", "10"), fill="#AAAAAA")
			# timestep
			c.create_text(20, 60, anchor=tk.SW, text=str('timestep: ' +str(timestep)), font=("Helvectica", "10"), fill="#AAAAAA")
			# overall energie
			c.create_text(20, 80, anchor=tk.SW, text=str('overall energie: ' +str(self.overall_energie)), font=("Helvectica", "10"), fill="#AAAAAA")
			c.create_text(20, 100, anchor=tk.SW, text=str('overall energie difference: ' +str(self.overall_energie_difference)), font=("Helvectica", "10"), fill="#AAAAAA")
			# number of components if more than one
			if self.connected_components_count > 1:
				c.create_text(20, 125, anchor=tk.SW, text=str('number of connected components: ' + str(self.connected_components_count)), font=("Helvectica", "14"), fill="#AAAAAA")
			# thermal_energie if there is still
			if thermal_energie > 0:
				c.create_text(20, 160, anchor=tk.SW, text=str('thermal energie: ' +str(thermal_energie)), font=("Helvectica", "20"), fill="#AAAAAA")
			# Calculation finished-message
			if self.calculation_finished:
				c.create_text(550, 60, anchor=tk.SW, text=str('Calculation finished after ' + str(timestep) + ' steps'), font=("Helvectica", "20"), fill="#000")
			# status message on the bottom of the screen
			if status_message != '':
				c.create_text(20, c_height, anchor=tk.SW, text=str(status_message), font=("Helvectica", "12"), fill="#000")

			# Show 'Now zooming out' if it is zoomed right now
			if zooming > 0:
				# Detect correct color for fade-out effect
				if zooming >= 40:
					color_string = "AAAAAA"
				if zooming >=30 and zooming < 40:
					color_string = "BBBBBB"
				if zooming >=20 and zooming < 30:
					color_string = "CCCCCC"
				if zooming >=10 and zooming < 20:
					color_string = "DDDDDD"
				if zooming >= 1 and zooming < 10:
					color_string = "EEEEEE"
				if zooming_out == 1:
					c.create_text(c_width/12+border, c_height/2+border, anchor=tk.SW, text=str('Now zooming out'), fill="#" + color_string, font=("Helvectica", "40"))
				else:
					c.create_text(c_width/12+border, c_height/2+border, anchor=tk.SW, text=str('Now zooming in'), fill="#" + color_string, font=("Helvectica", "40"))

		# DRAW AlL EDGES OF THE GRAPH
		for node in g.getNodes():
			# calculate position of this node
			x0 = ((node.coordinate_x*scaling_factor + (center_distance/2)) / center_distance * c_width) + border
			y0 = ((node.coordinate_y*scaling_factor + (center_distance/2)) / center_distance * c_height) + border
			# draw all the edges to neighbors of this node
			for neighbor_id in node.neighbour_ids:
				node2 = self.getNode(neighbor_id)
				if (node.id > node2.id):
					x1 = ((node2.coordinate_x*scaling_factor + (center_distance/2)) / center_distance * c_width) + border
					y1 = ((node2.coordinate_y*scaling_factor + (center_distance/2)) / center_distance * c_height) + border
					c.create_line (x0 + circle_diameter*scaling_factor / 2, y0 + circle_diameter*scaling_factor / 2, x1 + circle_diameter*scaling_factor / 2, y1 + circle_diameter*scaling_factor / 2)

		# DRAW AlL NODES OF THE GRAPH
		for node in g.getNodes():
			# calculate position of this node
			x0 = ((node.coordinate_x*scaling_factor + (center_distance/2)) / center_distance * c_width) + border
			y0 = ((node.coordinate_y*scaling_factor + (center_distance/2)) / center_distance * c_height) + border
			# draw this node
			fill_color = "AAA"
			if (node.cc_number <= 5):
				if (node.cc_number == 1):
					fill_color = "0C0"	# green
				if (node.cc_number == 2):
					fill_color = "00C"	# blue
				if (node.cc_number == 3):
					fill_color = "C00"	# red
				if (node.cc_number == 4):
					fill_color = "FF2"	# yellow
				if (node.cc_number == 5):
					fill_color = "FFB63D"	# orange
				if node.movable == 1:
					c.create_oval(x0, y0, x0 + circle_diameter*scaling_factor, y0 + circle_diameter*scaling_factor, fill="#" + fill_color)
				else:
					c.create_oval(x0, y0, x0 + circle_diameter*scaling_factor, y0 + circle_diameter*scaling_factor, fill="#000")
			else:
				if (node.cc_number == 6):
					fill_color = "FF2"	# yellow
				if (node.cc_number == 7):
					fill_color = "00C"	# blue
				if (node.cc_number == 8):
					fill_color = "C00"	# red
				if (node.cc_number == 9):
					fill_color = "0C0"	# green
				if node.movable == 1:
					c.create_rectangle(x0, y0, x0 + circle_diameter*scaling_factor, y0 + circle_diameter*scaling_factor, fill="#" + fill_color)
				else:
					c.create_rectangle(x0, y0, x0 + circle_diameter*scaling_factor, y0 + circle_diameter*scaling_factor, fill="#000")
			# write the id under the node
			c.create_text(x0, y0 + circle_diameter*scaling_factor + 20, anchor=tk.SW, text=str(node.id))
			# c.create_text(x0, y0 + circle_diameter*scaling_factor + 40, anchor=tk.SW, text=str(node.cc_number), fill="#008800")


		root.protocol("WM_DELETE_WINDOW", root.destroy)
		root.update()

		#Dump the nodes to disk, with coordinates
		if ( (timestep > 2000) and (self.nodes_dumped == False) ):
			self.dumpNodes()
			self.nodes_dumped = True

	#This function dumps the nodes fo the graph into a file
	def dumpNodes(self):
		# This is the amount to scale the coordinates by for the ddserver
		dd_scale = 2

		# Make a list of all of the nodes
		node_list = []
		max_x = 0
		max_y = 0
		min_x = 0
		min_y = 0
		for node in self.nodes:
			node_dict = {}
			# Get all of the basic info
			node_dict["x"] = (((node.coordinate_x*scaling_factor)/dd_scale) * c_width)
			node_dict["y"] = (((node.coordinate_y*scaling_factor)/dd_scale) * c_height)
			node_dict["word"] = node.id
			node_dict["links"] = node.neighbour_ids
			node_dict["hue"] = random.randint(0, 360)
			node_dict["sat"] = random.randint(20, 80)
			node_dict["light"] = random.randint(20, 60)
			# And now copy the dictionary into the list If it's
			# Iron man, put it in first
			if (node.id == "Iron Man"):
				node_list.insert(0, copy.deepcopy(node_dict))
			else:
				node_list.append(copy.deepcopy(node_dict))

			# Update the max and mins
			if (node_dict["x"] > max_x):
				max_x = node_dict["x"]
			if (node_dict["y"] > max_y):
				max_y = node_dict["y"]
			if (node_dict["x"] < min_x):
				min_x = node_dict["x"]
			if (node_dict["y"] < min_y):
				min_y = node_dict["y"]
		# And dump the json to disk
		outfile = open("jsons.dta", 'w')
		outfile.write(json.dumps(node_list))
		outfile.close()

		# And report the max and min pixel coordinates
		print "Max x: {}, Max y: {}, Min x: {}, Min y: {}".format(max_x, max_y, min_x, min_y)


	def calculateStep(self):
		new_overall_energie = 0

		# calculate the repulsive force for each node
		for node in self.nodes:
			node.force_coulomb = [0,0]
			for node2 in self.nodes:
				if (node.id != node2.id) and (node.cc_number == node2.cc_number):
					distance_x = node.coordinate_x - node2.coordinate_x
					distance_y = node.coordinate_y - node2.coordinate_y
					radius = sqrt(distance_x*distance_x + distance_y*distance_y)
					if radius != 0:
						vector = [distance_x/radius, distance_y/radius]
						node.force_coulomb[0] += 0.01 * vector[0] / radius**2.3
						node.force_coulomb[1] += 0.01 * vector[1] / radius**2.3
						# # Make bigger nodes more repulsive if not attached to it
						# if (node2 not in node.neighbour_ids):
						# 	node.force_coulomb[0] *= (1 + len(node2.neighbour_ids)/10)
						# 	node.force_coulomb[0] *= (1 + len(node2.neighbour_ids)/10)

						# add this force to the overall energie
						new_overall_energie += 0.01 / radius**2.3
					else:
						# if the nodes lie on each other, randomly replace them a bit
						node.force_coulomb[0] += random.random() - 0.5
						node.force_coulomb[1] += random.random() - 0.5

		# calculate the attractive force for each node, make the
		# number of connections for the node weigh heavier
		for node in self.nodes:
			node.force_harmonic = [0,0]
			for neighbor_id in node.neighbour_ids:
				node2 = self.getNode(neighbor_id)
				distance_x = node.coordinate_x - node2.coordinate_x
				distance_y = node.coordinate_y - node2.coordinate_y
				radius = sqrt(distance_x*distance_x + distance_y*distance_y)
				if radius != 0:
					vector = [distance_x/radius* -1, distance_y/radius * -1]
					force_harmonic_x = (vector[0] *radius**2.3 )/100
					force_harmonic_y = (vector[1] *radius**2.3 )/100
				else:
					# if the nodes lie on each other, randomly replace them a bit
					force_harmonic_x = random.random() - 0.5
					force_harmonic_y = random.random() - 0.5
				node.force_harmonic[0] += force_harmonic_x
				node.force_harmonic[1] += force_harmonic_y
				# add this force to the overall energie
				new_overall_energie += (radius**2.3)/100

		# calculate the difference between the old and new overall energie
		self.overall_energie_difference = self.overall_energie - new_overall_energie
		self.overall_energie = new_overall_energie
		all_energies.append(self.overall_energie)
		global highest_energy
		if self.overall_energie > highest_energy:
			highest_energy = self.overall_energie
		if not dont_finish_calculating:
			if (self.overall_energie_difference < energie_change_limit and self.overall_energie_difference > -1*energie_change_limit):
				self.calculation_finished = 1


		# set the new position influenced by the force
		global thermal_energie
		if timestep == 50 and thermal_energie > 0:
			thermal_energie = 0.2
		if timestep == 110 and thermal_energie > 0:
			thermal_energie = 0.1
		if timestep == 150 and thermal_energie > 0:
			thermal_energie = 0.0
		for node in self.nodes:
			(force_coulomb_x, force_coulomb_y) = node.force_coulomb
			(force_harmonic_x, force_harmonic_y) = node.force_harmonic
			# node.coordinate_x += force_coulomb_x + force_harmonic_x
			# node.coordinate_y += force_coulomb_y + force_harmonic_y

			node.velocity[0] += (force_coulomb_x + force_harmonic_x)*0.1
			node.velocity[1] += (force_coulomb_y + force_harmonic_y)*0.1
			# ensure maximum velocity
			if (node.velocity[0] > velocity_maximum):
				node.velocity[0] = velocity_maximum
			if (node.velocity[1] > velocity_maximum):
				node.velocity[1] = velocity_maximum
			if (node.velocity[0] < -1*velocity_maximum):
				node.velocity[0] = -1*velocity_maximum
			if (node.velocity[1] < -1*velocity_maximum):
				node.velocity[1] = -1*velocity_maximum
			# get friction into play
			if node.velocity[0] > friction:
				node.velocity[0] -= friction
			if node.velocity[0] < -1*friction:
				node.velocity[0] += friction
			if node.velocity[1] > friction:
				node.velocity[1] -= friction
			if node.velocity[1] < -1*friction:
				node.velocity[1] += friction

			# FINALLY SET THE NEW POSITION
			if node.id != grabed_node or node.cc_number == grabed_component:
				if node.movable == 1:
					node.coordinate_x += node.velocity[0]
					node.coordinate_y += node.velocity[1]

			if thermal_energie > 0:
				if node.movable == 1:
					node.coordinate_x += random.random()*thermal_energie*2-thermal_energie
					node.coordinate_y += random.random()*thermal_energie*2-thermal_energie

		# calculate centers for all connected components
		min_max = []
		center = []
		for i in range(0, self.connected_components_count):
			min_max.append([1000,1000,-1000,-1000])
		for i in range(0, self.connected_components_count):
			for node in self.getNodes():
				if node.cc_number == i+1:
					if node.coordinate_x < min_max[i][0]:
						min_max[i][0] = node.coordinate_x
					if node.coordinate_y < min_max[i][1]:
						min_max[i][1] = node.coordinate_y
					if node.coordinate_x > min_max[i][2]:
						min_max[i][2] = node.coordinate_x
					if node.coordinate_y > min_max[i][3]:
						min_max[i][3] = node.coordinate_y
			center.append([min_max[i][0] + (min_max[i][2] - min_max[i][0])/2, min_max[i][1] + (min_max[i][3] - min_max[i][1])/2])

		# if two components lie on each other, increase the distance between those
		for a in range(0, self.connected_components_count):
			for b in range(0, self.connected_components_count):
				# if a != b and center[a][0] > min_max[b][0] and center[a][0] < min_max[b][2] and center[a][1] > min_max[b][1] and center[a][1] < min_max[b][3]:
				if a != b:
					distance = 1
					if ((min_max[a][0]+distance > min_max[b][0] and min_max[a][0]-distance < min_max[b][2]) or (min_max[a][2]+distance > min_max[b][0] and min_max[a][2]-distance < min_max[b][2])) and ((min_max[a][1]+distance > min_max[b][1] and min_max[a][1]-distance < min_max[b][3]) or (min_max[a][3]+distance > min_max[b][1] and min_max[a][3]-distance < min_max[b][3])):
						# calculate replacement with help of the distance vector
						# of the centers
						distance_x = center[a][0] - center[b][0]
						distance_y = center[a][1] - center[b][1]
						radius = sqrt(distance_x*distance_x + distance_y*distance_y)
						replacement = [distance_x/radius* -1, distance_y/radius * -1]
						replacement[0] *= random.random() * -0.1
						replacement[1] *= random.random() * -0.1
						for node in self.nodes:
							if node.cc_number == a+1:
								if node.id != grabed_node:
									if node.movable == 1:
										node.coordinate_x += replacement[0]
										node.coordinate_y += replacement[1]

		# calculate the center of the graph and position all nodes new, so that
		# the center becomes (0,0)
		x_max = -1000
		x_min = 1000
		y_max = -1000
		y_min = 1000
		for node in self.getNodes():
			if node.coordinate_x < x_min:
				x_min = node.coordinate_x
			if node.coordinate_x > x_max:
				x_max = node.coordinate_x
			if node.coordinate_y < y_min:
				y_min = node.coordinate_y
			if node.coordinate_y > y_max:
				y_max = node.coordinate_y
		center_x = x_min + (x_max - x_min)/2
		center_y = y_min + (y_max - y_min)/2
		for node in g.getNodes():
			if node.id != grabed_node:
				if (node.movable == 1):
					node.coordinate_x -= center_x
					node.coordinate_y -= center_y

		scale = 0
		# prevent nodes from leaving the screen - ZOOM OUT
		if (x_min < (center_distance/scaling_factor/-2)) or (y_min < (center_distance/scaling_factor/-2)) or (x_max > (center_distance/scaling_factor/2)):
			scale = 1
		# longer if-statement because node-caption is included
		if (y_max > (center_distance/scaling_factor/2)-((circle_diameter+20)*scaling_factor*center_distance/c_height)):
			scale = 1
		# zoom back in if necessary - ZOOM IN
		if (x_min - zoom_in_border > (center_distance/scaling_factor/-2)) and (y_min - zoom_in_border > (center_distance/scaling_factor/-2)) and (x_max + zoom_in_border < (center_distance/scaling_factor/2)) and (y_max + zoom_in_border < (center_distance/scaling_factor/2)-((circle_diameter+10)*scaling_factor*center_distance/c_height)):
			scale = -1

		if scale == 1:
			# zoom out
			global scaling_factor
			global zooming
			global zooming_out
			scaling_factor = scaling_factor * 0.99
			zooming = 50
			zooming_out = 1
		else:
			# zoom in
			if scale == -1:
				global scaling_factor
				global zooming
				global zooming_out
				scaling_factor = scaling_factor * 1.01
				zooming = 50
				zooming_out = 0
			else:
				# don't zoom (count down the fading for the zooming message)
				global zooming
				if zooming > 0:
					zooming -= 1

	def calculateConnectedComponents(self):
		# calculate the connected components of the graph
		all_node_ids = []
		for node in self.nodes:
			all_node_ids.append(node.id)
		visited_node_ids = []
		node_ids_to_process = []
		connected_component_number = 0
		while len(all_node_ids) > 0:
			# take an anchor node
			node_ids_to_process.append(all_node_ids.pop())
			connected_component_number += 1
			# process all nodes that are reachable from the anchor-node
			while len(node_ids_to_process) > 0:
				anchor_node_id = node_ids_to_process.pop()
				# set the anchors cc_number and add all neighbors to the process
				# list that haven't been yet
				anchor_node = self.getNode(anchor_node_id)
				anchor_node.cc_number = connected_component_number
				for neighbor_node_id in anchor_node.neighbour_ids:
					if not neighbor_node_id in visited_node_ids:
						node_ids_to_process.append(neighbor_node_id)
						if neighbor_node_id in all_node_ids:
							all_node_ids.remove(neighbor_node_id)
				# this node is finished
				visited_node_ids.append(anchor_node_id)
		self.connected_components_count = connected_component_number

	def empty(self):
		self.clear()
	def clear(self):
		# deletes all nodes and edges in the graph
		self.nodes = []
		self.edges = []





# these events handle the interaction with the mouse
def event_button1_pressed(event):
	# recalculate the position into node-coordinates
	coordinate_x0 = ((event.x - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y0 = ((event.y - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_x1 = (((event.y + circle_diameter*scaling_factor) - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y1 = (((event.y + circle_diameter*scaling_factor) - border) * center_distance / c_width - center_distance/2) / scaling_factor

	for node in g.nodes:
		if node.coordinate_x > coordinate_x0 and node.coordinate_x < coordinate_x1 and node.coordinate_y > coordinate_y0 and node.coordinate_y < coordinate_y1:
			global grabed_node
			grabed_node = node.id

def event_button1_motion(event):
	# recalculate the position into node-coordinates
	coordinate_x0 = ((event.x - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y0 = ((event.y - border) * center_distance / c_height - center_distance/2) / scaling_factor
	coordinate_x1 = (((event.x + circle_diameter*scaling_factor) - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y1 = (((event.y + circle_diameter*scaling_factor) - border) * center_distance / c_height - center_distance/2) / scaling_factor

	global grabed_node
	if grabed_node == '':
		for node in g.nodes:
			if node.coordinate_x > coordinate_x0 and node.coordinate_x < coordinate_x1 and node.coordinate_y > coordinate_y0 and node.coordinate_y < coordinate_y1:
				grabed_node = node.id
	else:
		node = g.getNode(grabed_node)
		distance_x = coordinate_x0 - node.coordinate_x
		distance_y = coordinate_y0 - node.coordinate_y
		node.coordinate_x = coordinate_x0
		node.coordinate_y = coordinate_y0

		radius = sqrt(distance_x*distance_x + distance_y*distance_y)
		if radius != 0:
			node.velocity = [distance_x, distance_y]
			# ensure maximum velocity
			if (node.velocity[0] > velocity_maximum):
				node.velocity[0] = velocity_maximum
			if (node.velocity[1] > velocity_maximum):
				node.velocity[1] = velocity_maximum
			if (node.velocity[0] < -1*velocity_maximum):
				node.velocity[0] = -1*velocity_maximum
			if (node.velocity[1] < -1*velocity_maximum):
				node.velocity[1] = -1*velocity_maximum

def event_button1_released(event):
	global status_message
	global grabed_node
	grabed_node = ''



def event_button3_pressed(event):
	# recalculate the position into node-coordinates
	coordinate_x0 = ((event.x - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y0 = ((event.y - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_x1 = (((event.y + circle_diameter*scaling_factor) - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y1 = (((event.y + circle_diameter*scaling_factor) - border) * center_distance / c_width - center_distance/2) / scaling_factor

	for node in g.nodes:
		if node.coordinate_x > coordinate_x0 and node.coordinate_x < coordinate_x1 and node.coordinate_y > coordinate_y0 and node.coordinate_y < coordinate_y1:
			global grabed_component
			global grabed_node
			grabed_component = node.cc_number
			grabed_node = node.id

def event_button3_motion(event):
	# recalculate the position into node-coordinates
	coordinate_x0 = ((event.x - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y0 = ((event.y - border) * center_distance / c_height - center_distance/2) / scaling_factor
	coordinate_x1 = (((event.x + circle_diameter*scaling_factor) - border) * center_distance / c_width - center_distance/2) / scaling_factor
	coordinate_y1 = (((event.y + circle_diameter*scaling_factor) - border) * center_distance / c_height - center_distance/2) / scaling_factor

	global grabed_component
	global grabed_node
	if grabed_component == '' and grabed_node == '':
		for node in g.nodes:
			if node.coordinate_x > coordinate_x0 and node.coordinate_x < coordinate_x1 and node.coordinate_y > coordinate_y0 and node.coordinate_y < coordinate_y1:
				grabed_component = node.cc_number
				grabed_node = node.id
	else:
		# calculate the position-difference for the grabed node
		node = g.getNode(grabed_node)
		distance_x = coordinate_x0 - node.coordinate_x
		distance_y = coordinate_y0 - node.coordinate_y
		for node in g.nodes:
			if node.cc_number == grabed_component:
				node.coordinate_x += distance_x
				node.coordinate_y += distance_y

				radius = sqrt(distance_x*distance_x + distance_y*distance_y)
				if radius != 0:
					node.velocity = [distance_x, distance_y]
					# ensure maximum velocity
					if (node.velocity[0] > velocity_maximum):
						node.velocity[0] = velocity_maximum
					if (node.velocity[1] > velocity_maximum):
						node.velocity[1] = velocity_maximum
					if (node.velocity[0] < -1*velocity_maximum):
						node.velocity[0] = -1*velocity_maximum
					if (node.velocity[1] < -1*velocity_maximum):
						node.velocity[1] = -1*velocity_maximum


def event_button3_released(event):
	global status_message
	global grabed_component
	global grabed_node
	grabed_component = ''
	grabed_node = ''

def key_pressed(event):
	global grabed_node
	global grabed_component
	if event.char == ' ':
		if grabed_node != '':
			if grabed_component == '':
				# change movable-state of this node
				node = g.getNode(grabed_node)
				node.movable = 1 - node.movable
			else:
				# change movable-state of this component
				node_movable = g.getNode(grabed_node).movable
				print node_movable
				for node in g.nodes:
					if node.cc_number == grabed_component:
						node.movable = 1 - node_movable
	if event.char == 'e':
		global show_energie_in_background
		show_energie_in_background = 1 - show_energie_in_background
	if event.char == 'i':
		global show_textinformation_in_background
		show_textinformation_in_background = 1 - show_textinformation_in_background







# read lines of file with graph data
# print
# print 'reading file', filename, 'with graph data ...'
# try:
# 	f1 = open(filename, 'r')
# 	rows_graph = f1.readlines()
# 	f1.close()
# except IOError:
# 	print filename, 'could not be opened'
# 	sys.exit(1)

# parse lines and build graph
print 'creating graph ...'
g = Graph()
# find the line where the graph starts
for hub in hub_dict.keys():
	# Put the key in as a node
	g.addNode(hub)
	connections = hub_dict[hub]
	for word in connections:
		g.addNode(word)
		g.addEdge(hub, word)

# calculate the connected components:
g.calculateConnectedComponents()

# set the position of all nodes in the graph randomly to
# a number between 0 and 10
g.SetRandomNodePosition()

# create the window object for painting the graph on
root = tk.Tk()

# make it cover the entire screen
w, h = root.winfo_screenwidth(), root.winfo_screenheight()
root.overrideredirect(1)
root.geometry("%dx%d+0+0" % (w, h))

c_width = w - border*2
c_height = h - border*2

root.title("Force directed layout of graphs (by Mathias Bader) - version 0.1")
c = tk.Canvas(root, width=c_width+2*border, height=c_height+2*border, bg='white')
# left-click
c.bind("<Button-1>", event_button1_pressed)
c.bind("<B1-Motion>", event_button1_motion)
c.bind("<ButtonRelease-1>", event_button1_released)
# right-click
c.bind("<Button-3>", event_button3_pressed)
c.bind("<B3-Motion>", event_button3_motion)
c.bind("<ButtonRelease-3>", event_button3_released)
# keyboard key
c.bind("<Key>", key_pressed)
c.pack()
c.focus_set()



g.paintGraph()
while (not g.calculation_finished or dont_finish_calculating):
	g.calculateStep()
	timestep += 1
	g.paintGraph()
g.paintGraph()

c.mainloop()













