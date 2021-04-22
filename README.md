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

5.  To get Dimension of Screen of the Device use the code as `console.log(Dimensions.get("screen"));`

### Orientation Setting

    -To set the Both orientiation for your all devices go to app.json file and change orientation from potrait mode to default.

# Initial Outputs are as

![Fist Image](./assets/images/img1.jpeg "Fist Image")
![Second OutPut](./assets/images//img2.jpeg "Second Image")

# FlexBox:-

1. FlexBoxs inside a view divide the area in ratios as per their assign sizes.
2. When we have a multiple line content `alignItems` property works for each line item specificaly. to align complete content use `alignContent`.
3. `alignContent` works only when have wraping of the content using `flexWrap` .
   !["FlexBox"](./assets/images/Flex.png "FlexBox")

# Positioning

1. Absolute positioning will make the content move relative to it parent component and it disturbes the positioning of the other content of the parent component.
2. Relative positioning will make the content move relative to its current position it do not disturbs any other positions.

!["PositioningOutput"](./assets/images/Position1.png "PositioningOutput")
!["PositioningOutput"](./assets/images/Position2.png "PositioningOutput")
!["PositioningOutput"](./assets/images/Position3.png "PositioningOutput")
!["PositioningOutput"](./assets/images/Position4.png "PositioningOutput")

# Rendering a List:-

1. To render each item in List we use `map()` function.

### Syntax

```{people.map(item =>(
<View style={styles.container} key={item.key}>
<Text style={styles.listitems}>{item.name}</Text>
</View>
))}
```

- In Line 1 people is the name given to the array and to render it use people.map()
- To render items use any wird i am using `item` the implement an arrow function
- item are set in View and then in Text in View key is required to identify items specificaly thus used `key={item.key}`.
- after this simply render the items using item.name in my case my items in array have variable name.
  !["List"](./assets/images/List.png "List")

2. ## FlatList:-

- In FlatList we dont have to use scrollView it default have this Features and Its Benefit is as it has small code to write and it did not loads the colplete list at once unlike List map feature infact it Loads items as we Scoll down example `Instagram and FaceBook`.

### Syntax:-

```<FlatList
          keyExtractor={(item)=>item.id}
          data={people}
          renderItem={({item})=>(
            <Text style={styles.listitems}>{item.name}</Text>
          )}
          />
```

- It takes to props for sure **data** and **renderItems** data takes input of name of list to be rendered and renderItem takes the function to render the item as above.
- Use key Extractor if there is no key property in list this keyExtractor line makes id property of item as key property.
  -renderItem accepts only on prop name in destructuring we can only use item for destructuring i.e., `({item})` if we pass anything it will not work

!["FaltList"](./assets/images/FlatList.png "FlatList")
!["Column in FlatList"](./assets/images/ColumnFlatList.png "FlatList")
