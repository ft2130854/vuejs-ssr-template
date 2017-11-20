export default {
  data() {
    return {
      DataList: []
    }
  },
  methods: {},
  created() {
    this.$http.post('/hlht/joinSystem/joinNumberMonitoring', null).then(res => {
      console.log(res);
      this.DataList = res.data.data;
    }, response => {
    })
  }
}
