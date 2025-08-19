// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SimpleStorage {
    bool hasFavoriteNumber = true;
    int256 public favoriteNumber = -88;
    string FavoriteNumberInTest = "my fav is 7";
    address myAddress = 0xA5c7f43162333963149E5AC357917b37974A41f6;

    function Store(uint256 _favNumber) public virtual {
        favoriteNumber = int256(_favNumber);
    }

    function retrieve() view public returns (int256) {
        return favoriteNumber;
    }

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person[] public people;
    Person[3] public limitedPeople;
    mapping(string => uint256) public nameToFavoriteNumber;

    function addPerson(string memory _name, uint256 _favNumber) public {
        Person memory newPerson = Person(_favNumber, _name);
        people.push(newPerson);
        nameToFavoriteNumber[_name] = _favNumber;
    }
}