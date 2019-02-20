import React, {Component} from 'react';
import Drawer from "@material-ui/core/es/Drawer/Drawer";

class LeftSideMenu extends Component {



    render() {
        return (
            <div>
                <Drawer open={this.props.opened} onClose={this.props.onClose}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.onClose}

                    >
                        {this.props.sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

export default LeftSideMenu;
