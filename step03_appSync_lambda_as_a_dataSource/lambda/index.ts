type AppSyncEvent = {
    info: {
        fieldName: string
    }
    arguments: {
        msg: string
    }
}


exports.handler = async (event: AppSyncEvent) => {

    switch(event.info.fieldName){
        case "hello":
            return "HEllo World";
        case "customMessage":
            return `This is the custom Message${event.arguments.msg}`;
        default:
            return null;
    }
}