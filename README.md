# practiveRN

## Step 1:-

1. Download First some Basic functional dependencies using Expo-cli `expo init`
2. Now on command line start yarn to use see the output on phone or Emulator by command `yarn start`

### Components:-

1.  `<View>` this is a component use to implement View in our Project it basicaly act as a `<Div>` in in React Native Project.
2.  `<Text>` it is used to render text on our project
3.  `<Image>` this is use to render Images in project its styntax is as follows

- `<Image source={require("./assets/icon.png")}/>` to render Image from local system.

-` <Image source={{uri:"https://www.cookingclassy.com/wp-content/uploads/2019/05/fruit-salad-2.jpg"}}/>` this is for image from URl.

4.  `<Button>` this is used to insert button on project it syntax is as `<Button title="Click Me" onPress={() =>console.warn('Button Pressed')}/>`.

5.  To get Dimension of Scree of the Device use the code as `console.log(Dimensions.get("screen"));`

### Orientation Setting

    -To set the Bothe orientiatio for your all go to app.json file and change orientation from potrait mode to default.
