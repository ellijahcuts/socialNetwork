import React, {ChangeEvent} from 'react';

type StatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
type StatusStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<StatusPropsType, StatusStateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:Readonly<StatusPropsType>, prevState:Readonly<StatusStateType>) {
        if(prevProps.status !==this.props.status)
        this.setState({status: this.props.status})
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                    : <div>
                        <input autoFocus onBlur={this.deactivateEditMode}
                               onChange={this.onStatusChange}
                               type="text"
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
