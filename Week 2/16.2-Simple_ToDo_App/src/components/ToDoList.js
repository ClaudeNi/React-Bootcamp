import React from "react";
import ListItem from "./ListItem";

class ToDoList extends React.Component {
    state = { list: [], isAddingItem: false };

    addItem = () => {
        // if (this.state.isAddingItem) {
        // const newList = this.state.list;
        // newList.push({
        //     task: "item",
        //     edit: false,
        //     button1: "Edit",
        //     button2: "Delete",
        // });
        // this.setState({ list: newList, isAddingItem: false });
        // } else {
        if (!this.state.isAddingItem) {
            const newList = this.state.list;
            newList.push({
                task: "",
                edit: true,
                button1: "Add",
                button2: "Cancel",
            });
            this.setState({ list: newList, isAddingItem: true });
        }

        // }
    };

    handleEdit = ({ target: { id } }, { current }) => {
        const newList = this.state.list;
        const newItem = newList[id];
        if (current && current.value !== "") {
            if (this.state.isAddingItem || newItem.edit) {
                newItem.task = current.value;
            }
        } else {
            newItem.button1 = "Accept";
            newItem.button2 = "Cancel";
        }
        if (current) {
            newItem.button1 = "Edit";
            newItem.button2 = "Delete";
        }
        newItem.edit = !newItem.edit;
        newList[id] = newItem;
        newList[id] = newItem;
        this.setState({
            list: newList,
            isAddingItem: false,
        });
    };

    deleteItem = ({ target: { id } }) => {
        const newList = this.state.list;
        const newItem = newList[id];
        if (newItem.edit && !this.state.isAddingItem) {
            newItem.edit = false;
            newItem.button1 = "Edit";
            newItem.button2 = "Delete";
        } else {
            newList.splice(id, 1);
        }
        this.setState({ list: newList, isAddingItem: false });
    };

    displayList = () => {
        return this.state.list.map((item, i) => {
            return (
                <ListItem
                    key={i}
                    id={i}
                    itemData={item}
                    handleButton1={this.handleEdit}
                    handleButton2={this.deleteItem}
                />
            );
        });
    };

    render() {
        return (
            <div className="todo-container">
                <span className="title">My To Do List</span>
                <div className="todo-list">{this.displayList()}</div>
                <div className="btn" onClick={this.addItem}>
                    Add
                </div>
            </div>
        );
    }
}

export default ToDoList;
