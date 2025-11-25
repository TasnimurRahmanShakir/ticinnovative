'use server'

export async function submitDeliveryForm(formData) {
    const rawFormData = {
        senderAddress: formData.get('senderAddress'),
        receiverAddress: formData.get('receiverAddress'),
        productType: formData.get('productType'),
        weight: formData.get('weight'),
        contactNumber: formData.get('contactNumber'),
        email: formData.get('email'),
    }

    console.log("Server Action: Form Data Submitted", rawFormData);

    // Here you would typically save to database or send email
    // For now we just return the data to verify it worked
    return { success: true, data: rawFormData };
}

export async function submitBuyForm(formData) {
    const rawFormData = {
        productLink: formData.get('productLink'),
        contactNumber: formData.get('contactNumber'),
        email: formData.get('email'),
    }

    console.log("Server Action: Buy Form Data Submitted", rawFormData);

    return { success: true, data: rawFormData };
}

export async function submitShipForMeForm(formData) {
    const rawFormData = {
        address: formData.get('address'),
        email: formData.get('email'),
        contactNumber: formData.get('contactNumber'),
        productType: formData.get('productType'),
    }

    console.log("Server Action: Ship For Me Form Data Submitted", rawFormData);

    return { success: true, data: rawFormData };
}
