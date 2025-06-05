import React, { useState } from "react";

function ContactManager() {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddOrUpdate = () => {
        const { name, email, phone } = formData;
        if (!name || !email || !phone) return;

        if (editIndex !== null) {
            const updated = [...contacts];
            updated[editIndex] = { ...formData };
            setContacts(updated);
            setEditIndex(null);
        } else {
            setContacts([...contacts, { ...formData }]);
        }

        setFormData({ name: "", email: "", phone: "" });
    };

    const handleEdit = (index) => {
        setFormData(contacts[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updated = contacts.filter((_, i) => i !== index);
        setContacts(updated);
        if (editIndex === index) {
            setFormData({ name: "", email: "", phone: "" });
            setEditIndex(null);
        }
    };

    return (
        <div>
            <h2>Contact Manager</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
            />
            <button onClick={handleAddOrUpdate}>
                {editIndex !== null ? "Update Contact" : "Add Contact"}
            </button>

            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <strong>{contact.name}</strong> | {contact.email} | {contact.phone}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactManager;
