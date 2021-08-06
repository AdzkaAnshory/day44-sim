import React, { Component } from 'react';
import './tabel.css'
import { connect } from 'react-redux';
import { waitFor } from '@testing-library/react';
import axios from "axios"


class TabelSks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputMatkul: "",
			inputJmlsks: "",
			inputIdjurusan: "",
			inputDosen: "",
            sksList:[],
			keretaList:[]
         }
    }

    componentDidMount = () => {
		// this.setState({
		// 	sksList: this.props.listSks,
		// })
			const url = 'http://localhost:8081/KeretaApi/kereta';
			axios.get(url, {
				headers: {
				'Accept': 'application/json'
				}
			})
			.catch(err => console.log("Error respond",err))
			.then(res => {console.log("Data respond",res)
				const kereta = res;
				this.setState({ keretalist : kereta })	
			})
			// const url = fetch('localhost:8081/KeretaApi/users')
				// url.then(response => {
				// 	return response.json();
				// })
				// .then( responseJson => {
				// 	const dataResponse = responseJson;
				// 	const userArray = dataResponse.map((data, index)=> {
				// 		return(
				// 			{ iduser : data.id,
			//         name : data.nama,
				// 			  username : data.username,
				// 			  password : data.password,
				// 			  jabatan : data.jabatan
				// 		}
				// 		)
				// 	})
				// 	// console.log("asdasdasd", userArray);
				// 	this.setState({
				// 		usernew: userArray
				// 	})
				// });
	}

    addHandler = () => {
		const newList = {
			idsks: "",
			matkul: "",
            jmlsks: "",
            idjurusan: "",
			dosen:"",
			status: "new"
		}
		this.setState(oldState => ({
			sksList: [newList,...oldState.sksList]
		}))
	}

    editHandler = id => {
        const checkFilter = this.state.sksList.filter(users => users.status)
		
		if(checkFilter.length > 0)
		return alert("Save terlebih dahulu!!")
  
		const user = this.state.sksList[id]
		const newData = {
            idsks: id,
			matkul: user.matkul,
			jmlsks: user.jmlsks,
			idjurusan: user.idjurusan,
			dosen: user.dosen,
			status: "edit"
		}
	
		let userUpdate = this.state.sksList
		userUpdate.splice(id, 1, newData)
	
		this.setState({
			sksList: userUpdate,
			inputMatkul: user.matkul,
			inputJmlsks: user.jmlsks,
			inputIdjurusan: user.idjurusan,
			inputDosen: user.dosen

		})
	}
    
    onChangeHandler = e => {
		this.setState({
		  [e.target.name]: e.target.value
		})
	}


    onSaveEdit = id =>{
		const newData = {
			idsks: id + 1,
			matkul: this.state.inputMatkul,
			jmlsks: this.state.inputJmlsks,
			idjurusan: this.state.inputIdjurusan,
			dosen: this.state.inputDosen,
			status: ""
		}
	
		let sksUpdate = this.state.sksList
		sksUpdate.splice(id, 1, newData)
        this.setState({
            inputMatkul: "",
			inputJmlsks: "",
			inputIdjurusan: "",
			inputDosen: ""

        })
        this.props.editlist(sksUpdate)
	}

    onCancel = id =>{
		const newData = {
			idsks: id + 1,
			matkul: this.state.inputMatkul,
			jmlsks: this.state.inputJmlsks,
			idjurusan: this.state.inputIdjurusan,
			dosen: this.state.inputDosen,
			status: ""
		}
	
		let sksUpdate = this.state.sksList
		sksUpdate.splice(id, 1, newData)
        this.setState({
            inputMatkul: "",
			inputJmlsks: "",
			inputIdjurusan: "",
			inputDosen: ""
        })
        this.props.editlist(sksUpdate)
    }

    deleteHandler = id =>{
		let sksUpdate = this.state.sksList
		sksUpdate.splice(id, 1)
		this.props.editlist(sksUpdate)
    }

    renderList = () =>{
		return this.state.keretaList.map((kereta, index) => {
            if(kereta.status && kereta.status === "new")
				return(
					<tr key={index}>
						<td></td>
						<td><input type="text" name="inputMatkul" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputJmlsks" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputIdjurusan" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputDosen" onChange={this.onChangeHandler}></input></td>
						<td>
							<button type="submit" onClick={() => this.onSaveEdit(index)}>Save</button>
							<button onClick={() => this.onCancel(index)}>Cancel</button>
						</td>
					</tr>
				)
			if(kereta.status && kereta.status === "edit")
				return (<tr key={index}>
					<td>{index + 1}</td>
					<td>
					<input
						name="inputMatkul"
						type="text" value={this.state.inputMatkul} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputJmlsks"
						type="text" value={this.state.inputJmlsks} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputIdjurusan"
						type="text" value={this.state.inputIdjurusan} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputDosen"
						type="text" value={this.state.inputDosen} onChange={this.onChangeHandler} />
					</td>
					<td>
					<button type="submit" onClick={() => this.onSaveEdit(index)}>Save</button>
					<button onClick={() => this.onCancel(index)}>Cancel</button>
					</td>
				</tr>)
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{kereta.nama}</td>
					<td>{kereta.kelas}</td>
					<td>{kereta.tgl_pergi}</td>
					<td>{kereta.jam_pergi}</td>
					<td>{kereta.jam_sampai}</td>
					<td>{kereta.lama_perjalanan}</td>
					<td>{kereta.asal}</td>
					<td>{kereta.tujuan}</td>
					<td>
						<button className="btn-save-edit" onClick={() => this.editHandler(index)}>Edit</button>
						<button className="btn-delete" onClick={() => this.deleteHandler(index)}>Delet</button>
					</td>
				</tr>
			)
		})
	}



    render() { 
        return ( 
            <>
                <div className="">
                    <div>
						<button style={{marginLeft: 100}} className="btn-add" onClick={() => this.addHandler()}>Add New</button>
                        <hr></hr>
                    </div>
                <div className="thishome">
					{/* <table id="table" className="customers-list"> */}
					<table className="customers-list" width="80%">
					<thead>
						<tr>
							<th>No</th>
							<th>Nama Kereta</th>
							<th>Kelas</th>
							<th>Tgl Keberangkatan</th>
							<th>Jam Keberangkatan</th>
							<th>Jam Sampai</th>
							<th>Lama Perjalanan</th>
							<th>Asal</th>
							<th>Tujuan</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
					</table>
				</div>
			</div>
            </>
         );
    }
}

const mapStateToProps = state => ({
    listSks: state.Auth.listSks
})

const mapDispatchToProps = dispatch => ({
    editlist: sks => dispatch({ type: "EDIT_LIST", payload: { sks } })
})

export default connect(mapStateToProps, mapDispatchToProps)(TabelSks);