function right_init(){
    
    $(document.body).append("<script language='javascript' src='../assert/verUpload/verUpload.js'></script>");
new verUpload({
    files: "#upload",
    name: "files",
    load_list: true,
    success: function (d) {
        alert(d);
    },
    fail: function (d) {
        alert(d)
    },
    size: 1024 * 4,
    ext: ['jpg', 'jpeg', 'png', 'gif','doc','docx','txt','ppt','pdf']
});
}
