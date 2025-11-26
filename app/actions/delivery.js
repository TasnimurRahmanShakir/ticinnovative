'use server'

export async function submitDeliveryForm(prevState, formData) {
    const rawFormData = {
        senderAddress: formData.get('senderAddress'),
        receiverAddress: formData.get('receiverAddress'),
        productType: formData.get('productType'),
        weight: formData.get('weight'),
        contactNumber: formData.get('contactNumber'),
        email: formData.get('email'),
    }

    const errors = {}
    if (!rawFormData.senderAddress) errors.senderAddress = 'Sender Address is required'
    if (!rawFormData.receiverAddress) errors.receiverAddress = 'Receiver Address is required'
    if (!rawFormData.productType) errors.productType = 'Product Type is required'
    if (!rawFormData.contactNumber) errors.contactNumber = 'Contact Number is required'
    if (!rawFormData.email) errors.email = 'Email is required'

    if (Object.keys(errors).length > 0) {
        return { success: false, errors, data: rawFormData }
    }

    console.log("Server Action: Form Data Submitted", rawFormData);

    return { success: true, message: 'Delivery request submitted successfully!' };
}

export async function submitBuyForm(prevState, formData) {
    const rawFormData = {
        productLink: formData.get('productLink'),
        contactNumber: formData.get('contactNumber'),
        email: formData.get('email'),
    }

    const errors = {}
    if (!rawFormData.productLink) errors.productLink = 'Product Link is required'
    if (!rawFormData.contactNumber) errors.contactNumber = 'Contact Number is required'
    if (!rawFormData.email) errors.email = 'Email is required'

    if (Object.keys(errors).length > 0) {
        return { success: false, errors, data: rawFormData }
    }

    console.log("Server Action: Buy Form Data Submitted", rawFormData);

    return { success: true, message: 'Buy request submitted successfully!' };
}

export async function submitShipForMeForm(prevState, formData) {
    const rawFormData = {
        address: formData.get('address'),
        email: formData.get('email'),
        contactNumber: formData.get('contactNumber'),
        productType: formData.get('productType'),
    }

    const errors = {}
    if (!rawFormData.address) errors.address = 'Address is required'
    if (!rawFormData.email) errors.email = 'Email is required'
    if (!rawFormData.contactNumber) errors.contactNumber = 'Contact Number is required'
    if (!rawFormData.productType) errors.productType = 'Product Type is required'

    if (Object.keys(errors).length > 0) {
        return { success: false, errors, data: rawFormData }
    }

    console.log("Server Action: Ship For Me Form Data Submitted", rawFormData);

    return { success: true, message: 'Ship For Me request submitted successfully!' };
}

export async function submitWarehouseBooking(prevState, formData) {
    const rawFormData = {
        name: formData.get('name'),
        whatsapp: formData.get('whatsapp'),
        email: formData.get('email'),
        country: formData.get('country'),
        spaceRequirement: formData.get('spaceRequirement'),
        note: formData.get('note'),
    }

    const errors = {}
    if (!rawFormData.name) errors.name = 'Name is required'
    if (!rawFormData.whatsapp) errors.whatsapp = 'WhatsApp is required'
    if (!rawFormData.email) errors.email = 'Email is required'
    if (!rawFormData.country) errors.country = 'Country is required'
    if (!rawFormData.spaceRequirement) errors.spaceRequirement = 'Space Requirement is required'

    if (Object.keys(errors).length > 0) {
        return { success: false, errors, data: rawFormData }
    }

    console.log("Server Action: Warehouse Booking Form Data Submitted", rawFormData);

    return { success: true, message: 'Booking request sent successfully!' };
}

export async function submitContact(prevState, formData) {
    'use server'
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    }

    const errors = {}
    if (!data.firstName) errors.firstName = 'First Name is required'
    if (!data.lastName) errors.lastName = 'Last Name is required'
    if (!data.email) errors.email = 'Email is required'
    if (!data.phone) errors.phone = 'Phone is required'
    if (!data.message) errors.message = 'Message is required'

    if (Object.keys(errors).length > 0) {
        return { success: false, errors, data }
    }

    console.log('Form Submission:', data)
    return { success: true, message: 'Message sent successfully!' }
}