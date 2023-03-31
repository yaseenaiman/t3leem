import React from "react";
import Card from "./card";
import { Component } from "react";
import { getUsers } from "../../api/teachers";
class Cardlist extends Component {
    state = { teacher:getUsers()} 
    render() { 
        return (<div>

            {this.state.teacher.map((user) => {
                return( 
                    
              <Card key={user.Id}
              id={user.Id}
              name={user.Name}
              position={user.Position}
              compName={user.Company}
              city={user.Location}
        
             />
                );
                })
        }
            
        </div>);
    }
}
 
export default Cardlist;

