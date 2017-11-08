export default {
  data() {
    return {
      DataList: []
    }
  },
  methods: {},
  created() {
    this.$http.post('/hlht/joinSystem/dataCommutationMonitoring', null).then(res => {
      console.log(res);
      this.DataList = res.data.data;
    }, response => {
    })
  }
}
