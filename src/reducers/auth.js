const defaultState = {
    listSks :[ {idsks: 1, matkul:"Basic Java", jmlsks:"4", idjurusan: "IT", dosen:"Abidin Salamah"},
                {idsks: 2, matkul:"Basic PHP", jmlsks:"4", idjurusan: "IT", dosen:"Abidin Salamah"},
                {idsks: 3, matkul:"Basis Data", jmlsks:"3", idjurusan: "IT", dosen:"Abidin Salamah"},
                {idsks: 4, matkul:"Ilmu Nutrisi Ternak Dasar", jmlsks:"4", idjurusan: "PETERNAKAN", dosen:"Burhan Udin"},
                {idsks: 5, matkul:"Anatomi Ternak", jmlsks:"3", idjurusan: "PETERNAKAN", dosen:"Burhan Udin"},
                {idsks: 6, matkul:"Ilmu Ternak Potong", jmlsks:"4", idjurusan: "PETERNAKAN", dosen:"Burhan Udin"},
                {idsks: 7, matkul:"Biologi Seluler", jmlsks:"4", idjurusan: "KEDOKTERAN", dosen:"Edi Sujoko"},
                {idsks: 8, matkul:"Genetika", jmlsks:"4", idjurusan: "KEDOKTERAN", dosen:"Edi Sujoko"},
                {idsks: 9, matkul:"Ilmu Bedah", jmlsks:"3", idjurusan: "KEDOKTERAN", dosen:"Edi Sujoko"} ],
    ListDosen: [{id: 1, nama: "Abidin Salamah", NID: "12.31232.2123", jurusan: "IT", matkul1: "Basic Java", matkul2: "Basic PHP", matkul3: "Basis Data"},
                {id: 2, nama: "Burhan Udin", NID: "46.32398.7987", jurusan: "Peternakan", matkul1: "Ilmu Nutrisi Ternak Dasar", matkul2: "Ilmu Ternak Potong", matkul3: "Anatomi Ternak"},
                {id: 3, nama: "Edi Sujoko", NID: "23.24234.5233",  jurusan: "Kedokteran", matkul1: "Biologi Seluler", matkul2: "Genetika", matkul3: "Ilmu Bedah" }],
    ListJurusan:[{id: 1, jurusan: "IT"},
                {id: 2, jurusan: "Kedokteran"},
                {id: 3, jurusan: "Peternakan"}]
}

const authReducer = (state = defaultState, action) => {
    // console.log("state:", state);
    // console.log("action:", action.payload);
    switch (action.type) {
        case "EDIT_LIST":
            return {
                ...state,
                listSks: action.payload.sks
            }
        case "EDIT_DOSEN":
            return {
                ...state,
                ListDosen: action.payload.dosen
            }
        case "EDIT_JURUSAN":
            return {
                ...state,
                ListJurusan: action.payload.jurusan
            }
        case "LOGOUT":
            return defaultState
        default:
            return state
    }
}

export default authReducer