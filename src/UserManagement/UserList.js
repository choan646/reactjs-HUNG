import React, { Component } from "react";

export default class UserList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>FullName</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.fullName}</td>
              <td>{user.address}</td>
              <td className="d-flex">
                <button data-toggle="modal" data-target="#modelId" className="btn btn-success mr-4" onClick={()=>this.props.onGetUser(user.id)}>Update</button>
                <button className="btn btn-danger" onClick={()=> this.props.onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
