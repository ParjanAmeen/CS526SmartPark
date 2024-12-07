# SmartPark Front End

This project is a React Native application that fetches data from the [SmartPark back-end repository](https://github.com/ParjanAmeen/SmartPark-BackEnd). It gathers real-time parking lot data and displays it for the user. The app periodically updates the data every 30 seconds to ensure the user has the most current information.

## How to Run Front End

1. Clone the CS526SmartPark repo from GitHub. For the following parts, you will need a Mac.
2. After cloning, `cd` into the `smartPark` folder.
3. Make sure you have Xcode installed from the Mac App Store.
4. Run `xcode-select --install` to install the command line tools.
5. Run `sudo gem install cocoapods`.
6. Run `npm install -g expo-cli`.
7. Run `npm install`.
8. Go to the `App.js` file and change the links you see on lines 14 and 20. Replace the links with the link you used from the terminal after running `server.py` (which should still be running you want to keep this up).
   - Replace everything in the link before `/data/12345` on line 14.
   - Replace everything in the link before `/image/12345` on line 20.
9. Run `npm start`.
10. You should now be able to click `i`, which will bring up an iPhone simulator where you will see the parking lot data and image displayed. This will automatically fetch the data from the Flask server every 30 seconds. It may take a while to load up the simulator, and because of that, the terminal may say "timed out." In that case, you can just run `npm run ios` again.
