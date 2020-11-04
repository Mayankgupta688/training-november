interface IEmployeeData {
    id?: string;
    avatar: string;
    createdAt: string;
    name: string
}

var data: IEmployeeData[] | null = null;

data = [
    {
        "createdAt":"2019-07-11T07:25:10.284Z",
        "name":"Ciara Bahringer",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alexandermayes/128.jpg"
    },
    {
        "id":"2",
        "createdAt":"2019-07-11T01:52:45.255Z",
        "name":"Miss Gerda Terry",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/langate/128.jpg"
    }
];