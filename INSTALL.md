mean_stack
==========

Mean Stack for HPWC group

Installation on Ubuntu
----------------------

- MongoDB:

		sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10		# Add key to APT
		echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list 		# Add MongoDB source to APT
		sudo apt-get update									# Update APT
		sudo apt-get install -y mongodb-org					# Install MongoDB
		cat /var/log/mongodb/mongod.log 					# Should contain the line "[initandlisten] waiting for connections on port <port>"
		# sudo service mongod [start|stop|restart]			# MongoDB Utilities

- MEAN Stack:

		sudo npm install -g npm 				# update NPM
		sudo npm install -g mean-cli			# Install MEAN globally
		sudo npm install -g grunt-cli			# Install Grunt globally
		mean init <Your App Name>				# mean_app serves as an example and is already and initiated mean stack plus additional content
		cd <Your App Name>						# change to app directory
		npm install 							# Install required NPM modules
		mean package <YourPackage>				# Install a new package, to be found in <Your App Name>/packages/custom/<YourPackage>
		
