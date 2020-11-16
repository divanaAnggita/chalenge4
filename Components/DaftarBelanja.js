import React, {Component} from "react";  
import $ from "jquery";

class DaftarBelanja extends Component {
    constructor(){  
	  super();  
	  this.state = {  
	    siswa : [  
	      {nama: "Kangkung", jumlah: "7"},  
	      {nama: "Bayam", jumlah: "5"},  
	      {nama: "Wortel", jumlah: "10"},  
	    ],   
	    nama: "",  
	    jumlah: "",
	    action: "" 
	} 	
}  
	bind = (event) => {  
    	  this.setState({[event.target.name]: event.target.value});  
    	  /* fungsi ini digunakan untuk memasukkan data dari elemen input 
    	  ke variable state. 
    	  contoh ketika input nis diisi, maka secara otomatis variabel nis 
    	  pada state bernilai sesuai dengan inputan 
    	  */  
    	}  
    	    
    	  
    	Add = () => {  
			// $("#modal").modal('show'); 
    	  // mengosongkan nilai nis, nama, dan alamat  
    	  // pada saat tombol add ditekan  
    	  this.setState({    
    	    nama: "",  
    	    jumlah: "",  
    	    action: "insert"  
		  }); 
    	}  
    	  
    	Edit = (item) => {  
			// $("#modal").modal('show');
    	  this.setState({  
    	    nama: item.nama,  
    	    jumlah: item.jumlah,  
    	    action: "update"  
		  });  
		}  
		
		SaveSiswa = (event) =>{  
			event.preventDefault();  
			// temp digunakan untuk menyimpan sementara  
			// data array siswa  
			let temp = this.state.siswa;  
			
			if (this.state.action === "insert") {  
			  // temp akan ditambahkan dengan data siswa yang baru  
			  // sesuai dengan data yang dimasukkan pada form  
			  temp.push({  
				nama: this.state.nama,  
				jumlah: this.state.jumlah  
			  });  
			} else if (this.state.action === "update") {  
			  // mencari index data yang akan diubah  
			  let index = temp.findIndex(item => item.nis === this.state.nis);  
			  // mengubah data array sesuai dengan masukan pada form  
			  temp[index].nama = this.state.nama;  
			  temp[index].jumlah = this.state.jumlah;  
			}  
			
			
			// array siswa diupdate dengan nilai data temp  
			this.setState({siswa: temp});  
			
			// menutup modal  
			// $("#modal").modal('hide');  
		  }
    	
    	Drop = (index) => {  
    	  // temp digunakan untuk menyimpan sementara  
    	  // data array siswa  
    	  let temp = this.state.siswa;  
    	  
    	  // menghapus data pada index yang dihapus  
    	  temp.splice(index,1);  
    	  
    	  // array siswa diupdate dengan nilai data temp  
    	  this.setState({siswa: temp});  
    	}  
    
    render(){ 
    	return (  
    	    <div className="container">  
    	        { /* generate list */ }  
    	        <ul className="list-group">  
    	          {this.state.siswa.map((item,index) => {  
    	            return (  
    	              <li className="list-group-item" key={index}>  
    	                <h5 className="text-info">{item.nama}</h5>  
                        <h6>jumlah: {item.jumlah}</h6>  
    	  
    	                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
    	                data-toggle="modal" data-target="#modal">  
    	                  Edit  
    	                </button>  
    	                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
    	                  Hapus  
    	                </button>  
    	              </li>  
    	            );  
    	          })}  
    	        </ul>  
    	        <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
    	        data-toggle="modal" data-target="#modal">  
    	          Tambah Data  
    	        </button>  
    	  
    	        { /* elemen form modal */ }  
    	        <div className="modal fade" id="modal">  
    	          <div className="modal-dialog">  
    	            <div className="modal-content">  
    	              <div className="modal-header bg-success text-white">  
    	                <h5>Apa Yang Ingin Anda Beli</h5>  
    	              </div>  
    	              <form onSubmit={this.SaveSiswa}>  
    	              <div className="modal-body">
    	                Nama  
    	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
    	                value={this.state.nama} />  
    	                Jumlah  
    	                <input type="text" name="jumlah" className="form-control" onChange={this.bind}  
    	                value={this.state.alamat} />  
    	              </div>  
    	              <div className="modal-footer">  
    	                <button type="submit" className="btn btn-primary">  
    	                  Simpan  
    	                </button>  
    	              </div>  
    	              </form>  
    	            </div>  
    	          </div>  
    	        </div>  
    	      </div>  
    	    );  
          } 
        } 

export default DaftarBelanja;