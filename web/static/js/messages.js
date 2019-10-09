$(function(){
    var url = "http://127.0.0.1:8000/messages";
    var db ="http://127.0.0.1:8000/users"
    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url,
            insertUrl: url,
            updateUrl: url,
            deleteUrl: url,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true
        },
        remoteOperations: {
            sorting: true,
            paging: true
        },
        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: false},
            {dataField: "user_from_id",
            allowEditing: true
            },
            {dataField: "user_to_id",
            allowEditing: true
            },
            {dataField: "content",
            dataType: "text",
            allowEditing: true},
            ]
}).dxDataGrid("instance");
            });