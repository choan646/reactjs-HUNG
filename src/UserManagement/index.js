import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: {},
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users`,
      });
      this.setState({ users: result.data });
    } catch (error) {
      console.error(error);
    }
  };

  handleDelete = async (userId) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`,
      });

      this.fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  handleAddUser = async (user) => {
    try {
      await axios({
        method: "POST",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users`,
        data: user,
      });

      this.fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  handleGetUser = async (userId) => {
    try {
      const result = await axios({
        method: "GET",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`,
      });

      this.setState({
        selectedUser: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdateUser = async (user) => {
      const {id,...data} = user;
      try {
          await axios({
            method: "PUT",
            url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${id}`,
            data,
          })
          this.fetchUser();
      } catch (error) {
          console.log(error);
      }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>
        <div className="text-right my-4">
          <button
            data-toggle="modal"
            data-target="#modelId"
            className="btn btn-primary"
          >
            Add User
          </button>
        </div>
        <UserList
          users={this.state.users}
          onDelete={this.handleDelete}
          onGetUser={this.handleGetUser}
        />
        <UserForm user={this.state.selectedUser} onAddUser={this.handleAddUser} onUpdateUser={this.handleUpdateUser}/>
      </div>
    );
  }
}
