const ConstantStyles = {
    elevationStyles: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowFlextStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mapStyles: [
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "poi",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "transit",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        }
    ]
}

export default ConstantStyles