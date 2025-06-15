import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";



const SecondScreen=({route})=>{
	const imageUrl_Rectangle_3 = route.params.paramKey.url
	

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._iPhone_13_Pro_Max___1}>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {stylesheet._Rectangle_2}>
			</View>
			<Image style = {stylesheet._Rectangle_3} source = {{uri: imageUrl_Rectangle_3}}>
			</Image>
			<View style = {stylesheet._Line_1}>
			</View>
			<View style = {[stylesheet._Name, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Name, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.firstname+' '+route.params.paramKey.lastname}
			</Text>
			</View>
			<View style = {[stylesheet._About, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._About, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				About

			</Text>
			</View>
			<View style = {[stylesheet._Age, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Age, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Age

			</Text>
			</View>
			<View style = {[stylesheet._Gender, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Gender, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Gender

			</Text>
			</View>
			<View style = {stylesheet._Rectangle_4}>
			</View>
			<View style = {[stylesheet._Photos, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Photos, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Photos
			</Text>
			</View>
			<View style = {[stylesheet._21, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._21, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.age}
			</Text>
			</View>
			<View style = {[stylesheet._Male, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Male, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.gender}
			</Text>
			</View>
			<View style = {[stylesheet._1, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._1, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				1
			</Text>
			</View>
			<View style = {[stylesheet._Thrissur, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Thrissur, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.region}
			</Text>
			</View>
			<View style = {[stylesheet._Missing_from__, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Missing_from__, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Missing from  :
			</Text>
			</View>
			<View style = {[stylesheet._15_05_2022, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._15_05_2022, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.reportingdate}
			</Text>
			</View>
			<View style = {[stylesheet._Abilash_kb, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Abilash_kb, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.description}
			</Text>
			</View>
			<View style = {[stylesheet._Key_Features, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Key_Features, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Key Features 
			</Text>
			</View>
			<View style = {[stylesheet._Height__, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Height__, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Height :
			</Text>
			</View>
			<View style = {[stylesheet._Last_Seen__, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Last_Seen__, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Last Seen :
			</Text>
			</View>
			<View style = {[stylesheet._Skin_Colour__, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Skin_Colour__, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Skin Colour : 
			</Text>
			</View>
			<View style = {[stylesheet._Weight__, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Weight__, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Weight :
			</Text>
			</View>
			<View style = {[stylesheet._170cms, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._170cms, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.height}
			</Text>
			</View>
			<View style = {[stylesheet._49Kg, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._49Kg, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.weight}
			</Text>
			</View>
			<View style = {[stylesheet._Tint_Brown, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Tint_Brown, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.color}
			</Text>
			</View>
			<View style = {[stylesheet._At_Marine_Drive, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._At_Marine_Drive, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
			{route.params.paramKey.lastseen}
			</Text>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_iPhone_13_Pro_Max___1: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 811,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	_Rectangle_1: {
		position: "absolute",
		width: 428,
		height: 133,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(199, 197, 197, 1)",
	},
	_Rectangle_2: {
		position: "absolute",
		width: 88,
		height: 83,
		borderRadius: 15,
		opacity: 1,
		left: 29,
		right: "auto",
		top: 80,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_3: {
		position: "absolute",
		width: 84,
		height: 79,
		borderRadius: 13,
		opacity: 1,
		left: 31,
		right: "auto",
		top: 82,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Line_1: {
		position: "absolute",
		width: 428.0046691894531,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(225, 220, 220, 1)",
		left: 0,
		right: "auto",
		top: 223,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0.27026110224804456deg"},
		],
	},
	_Name: {
		position: "absolute",
		width: 257,
		height: 35,
		left: 122,
		right: "auto",
		top: 35,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 30,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_About: {
		position: "absolute",
		width: 70,
		height: 26,
		left: 37,
		right: "auto",
		top: 182,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Age: {
		position: "absolute",
		width: 70,
		height: 26,
		left: 125,
		right: "auto",
		top: 184,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Gender: {
		position: "absolute",
		width: 70,
		height: 26,
		left: 231,
		right: "auto",
		top: 184,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_4: {
		position: "absolute",
		width: 72,
		height: 26,
		borderRadius: 0,
		opacity: 1,
		left: 327,
		right: "auto",
		top: 182,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Photos: {
		position: "absolute",
		width: 70,
		height: 26,
		left: 327,
		right: "auto",
		top: 185,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_21: {
		position: "absolute",
		width: 33,
		height: 25,
		left: 143,
		right: "auto",
		top: 153,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Male: {
		position: "absolute",
		width: 70,
		height: 25,
		left: 231,
		right: "auto",
		top: 153,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_1: {
		position: "absolute",
		width: 33,
		height: 25,
		left: 346,
		right: "auto",
		top: 152,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Thrissur: {
		position: "absolute",
		width: 161,
		height: 24,
		left: 170,
		right: "auto",
		top: 87,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Missing_from__: {
		position: "absolute",
		width: 141,
		height: 32,
		left: 17,
		right: "auto",
		top: 270,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_15_05_2022: {
		position: "absolute",
		width: 138,
		height: 32,
		left: 160,
		right: "auto",
		top: 270,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Abilash_kb: {
		position: "absolute",
		width: 343,
		height: 139,
		left: 20,
		right: "auto",
		top: 334,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Key_Features: {
		position: "absolute",
		width: 135,
		height: 35,
		left: 25,
		right: "auto",
		top: 546,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Height__: {
		position: "absolute",
		width: 107,
		height: 27,
		left: 50,
		right: "auto",
		top: 592,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Last_Seen__: {
		position: "absolute",
		width: 107,
		height: 27,
		left: 50,
		right: "auto",
		top: 706,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Skin_Colour__: {
		position: "absolute",
		width: 157,
		height: 27,
		left: 50,
		right: "auto",
		top: 668,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Weight__: {
		position: "absolute",
		width: 107,
		height: 27,
		left: 50,
		right: "auto",
		top: 630,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '700',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_170cms: {
		position: "absolute",
		width: 217,
		height: 27,
		left: 164,
		right: "auto",
		top: 592,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '500',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_49Kg: {
		position: "absolute",
		width: 217,
		height: 27,
		left: 164,
		right: "auto",
		top: 630,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '500',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tint_Brown: {
		position: "absolute",
		width: 217,
		height: 27,
		left: 164,
		right: "auto",
		top: 664,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '500',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_At_Marine_Drive: {
		position: "absolute",
		width: 217,
		height: 27,
		left: 164,
		right: "auto",
		top: 706,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		fontWeight: '500',
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});

export default SecondScreen;
