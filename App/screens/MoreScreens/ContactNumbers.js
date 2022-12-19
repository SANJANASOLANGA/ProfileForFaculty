import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'

export default class ContactNumbers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      department: 'ANTHROPOLOGY',
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          style={styles.img}
          source={require('../../assets/Images/newTag.jpeg')}
        />

        <ScrollView style={{ backgroundColor: '#f7f7f7' }}>

          <Text style={styles.title}>Faculty of Humanities and Social Sciences</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.facultyDetails}>Faculty of Humanities and Social Sciences,{'\n'}
              University of Sri Jayewardenepura,{'\n'}
              Gangodawila,{'\n'}
              Nugegoda, Sri Lanka.
              {'\n'}{'\n'}
              +94 11 2803196{'\n'}
              deanfhss@sjp.ac.lk
            </Text>
            <View>
              <View style={{ height: 1, backgroundColor: '#ddd', width: '100%', marginTop: 12 }} />
            </View>
            <Text style={styles.title}>Select Department</Text>
            <Picker
              style={styles.picker} itemStyle={styles.pickerItem}
              selectedValue={this.state.department}
              onValueChange={(text) => this.setState({ department: text })}
            >
              <Picker.Item label="Anthropology" value="ANTHROPOLOGY" />
              <Picker.Item label="Criminology and Criminal Justice" value="crimino" />
              <Picker.Item label="Economics" value="econ" />
              <Picker.Item label="English and Linguistics" value="eng" />
              <Picker.Item label="English Language Teaching" value="eng2" />
              <Picker.Item label="Geography" value="geo" />
              <Picker.Item label="History and Archaeology" value="his" />
              <Picker.Item label="Information and Communication Technology" value="it" />
              <Picker.Item label="Languages, Cultural Studies and Performing Arts" value="art" />
              <Picker.Item label="Music and Creative Technology" value="music" />
              <Picker.Item label="Pali and Buddhist Studies" value="bud" />
              <Picker.Item label="Philosophy and Psychology" value="psyco" />
              <Picker.Item label="Political Science" value="poli" />
              <Picker.Item label="Sinhala and Mass Communication" value="sin" />
              <Picker.Item label="Social Statistics" value="stat" />
              <Picker.Item label="Sociology" value="soso" />
            </Picker>
          </View>
          <View style={styles.numberBorder}>
            {this.state.department == "ANTHROPOLOGY" ?
              <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 1187</Text>
              : this.state.department == "crimino" ?
                <Text style={styles.departmentDetails}>{'\n'}Extension - 8261</Text>
                : this.state.department == "econ" ?
                  <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2014</Text>
                  : this.state.department == "eng" ?
                    <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 275 8309</Text>
                    : this.state.department == "eng2" ?
                      <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2499</Text>
                      : this.state.department == "geo" ?
                        <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2028</Text>
                        : this.state.department == "his" ?
                          <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 1163</Text>
                          : this.state.department == "it" ?
                            <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 3407</Text>
                            : this.state.department == "art" ?
                              <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 275 8318</Text>
                              : this.state.department == "music" ?
                                <Text style={styles.departmentDetails}>{'\n'}No Contact Information </Text>
                                : this.state.department == "bud" ?
                                  <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2752</Text>
                                  : this.state.department == "psyco" ?
                                    <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2272</Text>
                                    : this.state.department == "poli" ?
                                      <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 318 8401</Text>
                                      : this.state.department == "sin" ?
                                        <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2214</Text>
                                        : this.state.department == "stat" ?
                                          <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 275 8338</Text>
                                          : this.state.department == "soso" ?
                                            <Text style={styles.departmentDetails}>{'\n'}Contact Number - +94 11 280 2207</Text>
                                            : <Text style={styles.departmentDetails}>{'\n'}No Contact Information</Text>}
          </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  numberBorder: {
    borderColor: '#e3d2d1',
    backgroundColor: '#e3d2d1',
    height: 90,
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
    marginTop: 10,
    marginBottom: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#470f0b',
    textAlign: 'left'
  },
  picker: {
    width: 380,
    backgroundColor: '#ede6e4',
    borderColor: 'black',
    borderWidth: 1,
    color: '#19241c',
  },
  pickerItem: {
    color: 'red'
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  onePickerItem: {
    height: 44,
    color: 'red'
  },
  twoPickers: {
    width: 200,
    height: 88,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  twoPickerItems: {
    height: 88,
    color: 'red'
  },
  facultyDetails: {
    textAlign: 'left',
    fontSize: 17,
    color: '#4f0003',
    marginLeft: 5,

  },
  departmentDetails: {
    flex: 0.9,
    textAlign: 'left',
    fontSize: 20,
    color: '#4f0003',
    fontWeight: 'bold',
    borderColor: 'black',
    borderRadius: 2
  }
});