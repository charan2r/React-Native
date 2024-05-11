import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    StyleSheet
} from 'react-native';
import Searchbar from '../../book app/SearchBarScreen';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Home = ({ navigation }) => {

    const profileData = {
        name: 'Username'
    }

    const underland = {
        id: 1,
        bookName: "UNDERLAND",
        bookCover: images.underland,
        rating: 4.0,
        language: "Eng",
        author: "Robert McFarlane",
        genre: [
            "Fiction", "Adventure"
        ],
        readed: "10k",
        description: "Tells the story of a boy named Gregor and his adventures in the Underland, a subterranean world located under New York City.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000",
    }

    const witcher = {
        id: 2,
        bookName: "Lady of the Lake",
        bookCover: images.witcher,
        rating: 4.8,
        language: "Eng",
        author: "Andrzej Sapkowski",
        genre: [
            "Adventure", "Drama", "Fiction"
        ],
        readed: "25k",
        description: "It is the seventh book in The Witcher series and the fifth novel in the saga. It continues the story from The Tower of the Swallow.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const sh= {
        id: 4,
        bookName: "Adventures of Sherlock Holmes",
        bookCover: images.sh,
        rating: 4.5,
        language: "Eng",
        author: "Sir Arthut Conan Doyle",
        genre: [
            "Drama", "Adventure"
        ],
        readed: "50k",
        description: "It contains the earliest short stories featuring the consulting detective Sherlock Holmes.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const lotr= {
        id: 5,
        bookName: "The Lord of the Rings",
        bookCover: images.lotr,
        rating: 4.7,
        language: "Eng",
        author: "J.R.R. Tolkien",
        genre: [
            "Fiction", "Adventure"
        ],
        readed: "80k",
        description: "The title refers to the story's main antagonist, the Dark Lord Sauron, who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const howto= {
        id: 6,
        bookName: "C How to Program",
        bookCover: images.howto,
        rating: 3.8,
        language: "Eng",
        author: "Paul Dietel",
        genre: [
            "Education"
        ],
        readed: "40k",
        description: "It Introduces three of today's programming paradigms-procedural programming in C, and object-oriented and generic programming in C++.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }



    const myBooksData = [
        {
            ...underland,
            completion: "45%",
            lastRead: "5d 5h",

        },
        {
            ...witcher,
            completion: "68%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "50%",
            lastRead: "1d 2h",

        },
        {
            ...sh,
            completion: "20%",
            lastRead: "2d 2h",

        },
        {
            ...lotr,
            completion: "70%",
            lastRead: "4d 2h",

        },
        {
            ...howto,
            completion: "30%",
            lastRead: "1d 3h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Selling",
            books: [
                underland, witcher, bookTheTinyDragon,lotr
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                witcher,sh
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon,howto
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>  
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3, fontSize:22 }}>Books</Text>
                    </View>
                </View>
        )
    }

    function renderButtonSection() {
        const [value, setValue] = useState()
        function updateSearch(value) {
            console.log(updateSearch)
        }
        return (
            <View style={styles.conatiner}>
                <Image
                    style={{ marginTop: '15%', marginLeft: '5%' }}
                    />
                <Searchbar
                    value={value}
                    setValue={setValue}
                    updateSearch={updateSearch}
                    style={{ marginTop: '8%' }}
                />
        </View>
        )
    }

    function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetails2", {book: item})}
                >
                    
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>Popular Books</Text>

                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                
                <View style={{ marginVertical: SIZES.base }}>
                    
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("BookDetails2", {book: item})}
                    >
                        
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                            </View>

                            
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Fiction") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Fiction</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Education") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>Education</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => console.log("Bookmark")}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
                
                
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            
            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            
            <ScrollView style={{ marginTop: SIZES.radius }}>
                
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    conatiner:{
        flex:1,
        paddingBottom:70,
    }
})

export default Home;