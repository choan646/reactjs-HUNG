import React, { Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Lưu trữ giá trị của các ô input
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    };
  }

  handleChange = (event) => {
    // this.setState({
    //     values:{
    //         username: event.target.value, // sẽ bị mất các key khác
    //     }
    // })

    const { name, value } = event.target;
    // console.log('name: ',name,'value: ', value);
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };

  //Viết riêng 1 hàm chứ k viết thẳng vào button, để k bị cấn form vào phần update
  handleSubmit = () => {
    if (this.state.values.id) {
      this.props.onUpdateUser(this.state.values);
    } else {
      this.props.onAddUser(this.state.values);
    }
    this.setState({
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.id && prevProps.user.id !== this.props.user.id) {
      this.setState({
        values: this.props.user,
      });
    }
  }

  render() {
    return (
      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Form</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.values.username}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={this.state.values.phone}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={this.state.values.fullName}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={this.state.values.address}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
