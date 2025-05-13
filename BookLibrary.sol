// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BookLibrary {
    struct Book {
        string title;
        bool isRead;
    }

    mapping(address => Book[]) private userBooks;

    function addBook(string calldata _title) external {
        userBooks[msg.sender].push(Book(_title, false));
    }

    function getBooks() external view returns (Book[] memory) {
        return userBooks[msg.sender];
    }

    function toggleReadStatus(uint _index) external {
        require(_index < userBooks[msg.sender].length, "Invalid index");
        userBooks[msg.sender][_index].isRead = !userBooks[msg.sender][_index].isRead;
    }
}
