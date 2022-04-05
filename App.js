import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { jsPDF } from "jspdf";

export default function App() {

  const [age, onChangeAge] = React.useState("0");
  const [weight, onChangeWeight] = React.useState("0");
  const [height, onChangeHeight] = React.useState("0");
  const [veg, onChangeVeg] = React.useState(false);

  const [outText, setOut] = React.useState(" ")

  const Submit = () => {
    setOut(`Diet Chart for ${age} years old\nCalories: ${calcCalories()}\nProtein: ${calcProtein()}\nCarbohydrates: ${calcCarbohydrates()}\nFat: ${calcFat()}\nFor Full Diet, download PDF.`);
  }

  const Download = () => {
    console.log('diet out')
    var diet = new jsPDF();
    diet.setFontSize(20);
    diet.text(`Diet Chart for ${age} years old`, 10, 10);
    diet.setFontSize(12);
    diet.text(`Weight: ${weight} kg`, 10, 30);
    diet.text(`Height: ${height} cm`, 10, 40);
    diet.text(`Vegetarian: ${veg ? "Yes" : "No"}`, 10, 50);
    diet.text(`Calories: ${calcCalories()}`, 10, 60);
    diet.text(`Protein: ${calcProtein()}`, 10, 70);
    diet.text(`Carbohydrates: ${calcCarbohydrates()}`, 10, 80);
    diet.text(`Fat: ${calcFat()}`, 10, 90);
    diet.text(`Sodium: ${calcSodium()}`, 10, 100);
    diet.text(`Fiber: ${calcFiber()}`, 10, 110);
    diet.text(`Sugar: ${calcSugar()}`, 10, 120);
    diet.text(`Cholesterol: ${calcCholesterol()}`, 10, 130);
    diet.text(`Vitamin A: ${calcVitaminA()}`, 10, 140);
    diet.text(`Vitamin C: ${calcVitaminC()}`, 10, 150);
    diet.text(`Vitamin D: ${calcVitaminD()}`, 10, 160);
    diet.text(`Vitamin E: ${calcVitaminE()}`, 10, 170);
    diet.text(`Vitamin K: ${calcVitaminK()}`, 10, 180);
    diet.text(`Calcium: ${calcCalcium()}`, 10, 190);
    diet.text(`Iron: ${calcIron()}`, 10, 200);
    diet.text(`Potassium: ${calcPotassium()}`, 10, 210);
    diet.text(`Zinc: ${calcZinc()}`, 10, 220);
    diet.save('diet.pdf');
  }

  const calcCalories = () => {
    var calories = 0;
    if (veg) {
      calories = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
      calories = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
    return calories;
  }

  const calcProtein = () => {
    var protein = 0;
    if (veg) {
      protein = (weight * 2.2) + (height * 0.23);
    } else {
      protein = (weight * 2.2) + (height * 0.23);
    }
    return protein;
  }

  const calcCarbohydrates = () => {
    var carbohydrates = 0;
    if (veg) {
      carbohydrates = (weight * 0.8) + (height * 0.3);
    } else {
      carbohydrates = (weight * 0.8) + (height * 0.3);
    }
    return carbohydrates;
  }

  const calcFat = () => {
    var fat = 0;
    if (veg) {
      fat = (weight * 0.2) + (height * 0.25);
    } else {
      fat = (weight * 0.2) + (height * 0.25);
    }
    return fat;
  }

  const calcSodium = () => {
    var sodium = 0;
    if (veg) {
      sodium = (weight * 0.5) + (height * 0.3);
    } else {
      sodium = (weight * 0.5) + (height * 0.3);
    }
    return sodium;
  }

  const calcFiber = () => {
    var fiber = 0;
    if (veg) {
      fiber = (weight * 0.3) + (height * 0.3);
    } else {
      fiber = (weight * 0.3) + (height * 0.3);
    }
    return fiber;
  }

  const calcSugar = () => {
    var sugar = 0;
    if (veg) {
      sugar = (weight * 0.3) + (height * 0.3);
    } else {
      sugar = (weight * 0.3) + (height * 0.3);
    }
    return sugar;
  }

  const calcCholesterol = () => {
    var cholesterol = 0;
    if (veg) {
      cholesterol = (weight * 0.3) + (height * 0.3);
    } else {
      cholesterol = (weight * 0.3) + (height * 0.3);
    }
    return cholesterol;
  }

  const calcVitaminA = () => {
    var vitaminA = 0;
    if (veg) {
      vitaminA = (weight * 0.3) + (height * 0.3);
    } else {
      vitaminA = (weight * 0.3) + (height * 0.3);
    }
    return vitaminA;
  }

  const calcVitaminC = () => {
    var vitaminC = 0;
    if (veg) {
      vitaminC = (weight * 0.3) + (height * 0.3);
    } else {
      vitaminC = (weight * 0.3) + (height * 0.3);
    }
    return vitaminC;
  }

  const calcVitaminD = () => {
    var vitaminD = 0;
    if (veg) {
      vitaminD = (weight * 0.3) + (height * 0.3);
    } else {
      vitaminD = (weight * 0.3) + (height * 0.3);
    }
    return vitaminD;
  }

  const calcVitaminE = () => {
    var vitaminE = 0;
    if (veg) {
      vitaminE = (weight * 0.3) + (height * 0.3);
    } else {
      vitaminE = (weight * 0.3) + (height * 0.3);
    }
    return vitaminE;
  }

  const calcVitaminK = () => {
    var vitaminK = 0;
    if (veg) {
      vitaminK = (weight * 0.3) + (height * 0.3);
    } else {
      vitaminK = (weight * 0.3) + (height * 0.3);
    }
    return vitaminK;
  }

  const calcCalcium = () => {
    var calcium = 0;
    if (veg) {
      calcium = (weight * 0.3) + (height * 0.3);
    } else {
      calcium = (weight * 0.3) + (height * 0.3);
    }
    return calcium;
  }

  const calcIron = () => {
    var iron = 0;
    if (veg) {
      iron = (weight * 0.3) + (height * 0.3);
    } else {
      iron = (weight * 0.3) + (height * 0.3);
    }
    return iron;
  }

  const calcPotassium = () => {
    var potassium = 0;
    if (veg) {
      potassium = (weight * 0.3) + (height * 0.3);
    } else {
      potassium = (weight * 0.3) + (height * 0.3);
    }
    return potassium;
  }

  const calcZinc = () => {
    var zinc = 0;
    if (veg) {
      zinc = (weight * 0.3) + (height * 0.3);
    } else {
      zinc = (weight * 0.3) + (height * 0.3);
    }
    return zinc;
  }

  const calcCaloriesPerDay = () => {
    var caloriesPerDay = 0;
    if (veg) {
      caloriesPerDay = (calcCalories() / 7);
    } else {
      caloriesPerDay = (calcCalories() / 7);
    }
    return caloriesPerDay;
  }

  const calcProteinPerDay = () => {
    var proteinPerDay = 0;
    if (veg) {
      proteinPerDay = (calcProtein() / 7);
    } else {
      proteinPerDay = (calcProtein() / 7);
    }
    return proteinPerDay;
  }
  return (
    <View style={styles.container}>

      <LinearGradient 
        colors={['black', '#00536B']} 
        start={{
          x: 1,
          y: 2
        }}
        end={{
          x: 1,
          y: 1000
        }}
        style={styles.box} 
      />


      <Image
        style = {styles.logo}
        source = {require('./Images/App_Logo.png')}
      />
      <Text style={styles.title}>Diet.Ai</Text>

      <Text style={styles.subtitle}>Your AI dietician.</Text>



      <Text style={styles.input1Text}>Age: </Text>
      <Text style={styles.input2Text}>Weight: </Text>
      <Text style={styles.input3Text}>Height: </Text>
      <Text style={styles.input4Text}>Veg: </Text>

      <TextInput style = {styles.input1} onChangeText = {onChangeAge} value = {age}/>
      <TextInput style = {styles.input2} onChangeText = {onChangeWeight} value = {weight}/>
      <TextInput style = {styles.input3} onChangeText = {onChangeHeight} value = {height}/>
      <TextInput style = {styles.input4} onChangeText = {onChangeVeg} value = {veg}/>




      <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText} onPress={Submit}>Generate Diet</Text></TouchableOpacity>

      <Text style={styles.title2}>Diet Plan:</Text>

      <Text style={styles.outText}>{outText}</Text>

      <TouchableOpacity style={styles.downloadButton} onPress = {Download}><Text style={styles.downloadButtonText}>Download as PDF</Text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    position: 'absolute',
    color: '#fff',
    width: 375,
    height: 66,
    top: 57,
    fontFamily: "Manrope",
    fontWeight:"600",
    fontSize: 28,
    lineHeight: 75,
    textAlign: "center",
  },
  title2: {
    position: 'absolute',
    color: '#fff',
    width: 375,
    height: 66,
    top: 404,
    fontFamily: "Manrope",
    fontWeight:"600",
    fontSize: 32,
    lineHeight: 75,
    textAlign: "center",
  },
  subtitle: {
    position: 'absolute',
    color: '#fff',
    width: 375,
    height: 66,
    top: 90,
    fontFamily: "Manrope",
    fontWeight:"600",
    fontSize: 20,
    lineHeight: 75,
    textAlign: "center",
  },
  submitButton: {
    position: 'absolute',
    width: 160, height: 53, top: 247, left: 187, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center'
  },
  submitButtonText: {
    fontFamily: "Manrope", fontWeight: '800', fontSize: 20, textAlign: "center",
  },

  downloadButton: {
    position: 'absolute',
    width: 209, height: 53, top: 750, left: 80, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center'
  },
  downloadButtonText: {
    fontFamily: "Manrope", fontWeight: '800', fontSize: 16, textAlign: "center",
  },


  logo: {
    width: 65,
    height: 65,
    top: 10,
    position: 'absolute',
    alignSelf: 'center',
  },

  blur01: {
    position: "absolute",
    width: 403,
    height: 588,
    left: -13,
    top: 437,
    background: "#002853",
    filter: "blur(564px)",
  },

  box: {
    width: '100%',
    height: '100%',
    zIndex: 0,
  },

  input1: {
    position: "absolute",
    width: 300, height: 40, top: 150, left: 70, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  input2: {
    position: "absolute",
    width: 200, height: 40, top: 200, left: 100, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  input3: {
    position: "absolute",
    width: 80, height: 40, top: 250, left: 90, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  input4: {
    position: "absolute",
    width: 50, height: 40, top: 300, left: 60, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  input1Text: {
    position: "absolute",
    width: 130, height: 40, top: 156, left: 11, fontFamily: "Manrope", fontWeight: '800', fontSize: 20, textColor: '#fff', color: '#fff',
  },

  input2Text: {
    position: "absolute",
    width: 130, height: 40, top: 206, left: 11, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  input3Text: {
    position: "absolute",
    width: 130, height: 40, top: 256, left: 11, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  input4Text: {
    position: "absolute",
    width: 130, height: 40, top: 306, left: 11, fontFamily: "Manrope", fontWeight: '800', fontSize: 20,  textColor: '#fff', color: '#fff',
  },

  outText: {
    position: 'absolute',
    color: '#fff',
    width: 289,
    height: 140,
    top: 486,
    left: 43,
    fontFamily: "Manrope",
    fontSize: 18,
    lineHeight: 40,
  }

});
