
const state = {
    participants : [
        // {ID: 1, Name: 'cyka'},
        // {ID: 2, Name: 'cykaBlyat'},
        // {ID: 3, Name: 'yobta'},
        // {ID: 4, Name: 'pizdiuk'},
        // {ID: 5, Name: 'baran'},
        // {ID: 6, Name: 'cykaa'},
        // {ID: 7, Name: 'cykaBlyat'},
        // {ID: 8, Name: 'yobta'},
        // {ID: 9, Name: 'pizdiuk'},
        // {ID: 10, Name: 'baran'},
        // {ID: 11, Name: 'cyka'},
        // {ID: 12, Name: 'cykaBlyat'},
        // {ID: 13, Name: 'yobta'},
        // {ID: 14, Name: 'pizdiuk'},
        // {ID: 15, Name: 'baran'},
        // {ID: 16, Name: 'cyka'},
        // {ID: 17, Name: 'cykaBlyat'},
        // {ID: 18, Name: 'yobta'},
        // {ID: 19, Name: 'pizdiuk'},
        // {ID: 20, Name: 'baran'},
        // {ID: 21, Name: 'cyka'},
        // {ID: 22, Name: 'cykaBlyat'},
        // {ID: 23, Name: 'yobta'},
        // {ID: 24, Name: 'pizdiuk'},
        // {ID: 25, Name: 'baran'},
        // {ID: 26, Name: 'huyman'}
    ]
};

const getters = {
    allParticipants: state => state.participants
};

const actions = {
    async fetchParticipants({commit}) {   
        commit('fetchParticipants');
    },
    async addParticipant({commit}, participant){   
        commit('addParticipant', participant);
    },
    async removeParticipant({commit}, id){   
        commit('removeParticipant', id);
    }
};

const mutations = {
    addParticipant: (state, participant) => state.participants.push(participant),
    removeParticipant: function (state, id){
        state.participants = state.participants.filter(p => p.ID !== id )

        // reasign IDs.
        state.participants.forEach( (item, index ) => { item.ID = index + 1; });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};