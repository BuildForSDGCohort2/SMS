import React, { Component } from 'react'
import {Table, Container} from 'react-bootstrap'
class Attendance extends Component {
    render() {
        return (
            <div class="main-content">
      <Container>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Attendance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <label class="switch switch-text switch-primary switch-pill">
                      <input type="checkbox" class="switch-input"/>
                      <span data-on='On' data-off='Off' class="switch-label"></span>
                      <span class="switch-handle"></span>
                    </label>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <label class="switch switch-text switch-primary switch-pill">
                      <input type="checkbox" class="switch-input"/>
                      <span data-on='On' data-off='Off' class="switch-label"></span>
                      <span class="switch-handle"></span>
                    </label>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <label class="switch switch-text switch-primary switch-pill">
                      <input type="checkbox" class="switch-input"/>
                      <span data-on='On' data-off='Off' class="switch-label"></span>
                      <span class="switch-handle"></span>
                    </label>
    </tr>
  </tbody>
</Table>
</Container>
            </div>
        )
    }
}
export default (Attendance)