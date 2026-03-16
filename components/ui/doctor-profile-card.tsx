import React, { useState } from "react";

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  isEarliest: boolean;
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Doe",
    time: "2026-03-15T09:00",
    isEarliest: true,
  },
  {
    id: "2",
    patientName: "Jane Smith",
    time: "2026-03-15T11:00",
    isEarliest: false,
  },
  {
    id: "3",
    patientName: "Alice Brown",
    time: "2026-03-15T08:30",
    isEarliest: true,
  },
];

export default function DoctorProfileCard() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [cancelId, setCancelId] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState("");

  const handleCancel = (id: string) => {
    setCancelId(id);
  };

  const submitCancel = () => {
    if (cancelId && cancelReason.trim()) {
      setAppointments(appointments.filter((a) => a.id !== cancelId));
      setCancelId(null);
      setCancelReason("");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 24,
      }}
    >
      <h2>Doctor Profile</h2>
      <h3>Appointments Assigned</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {appointments.map((appt) => (
          <li
            key={appt.id}
            style={{
              marginBottom: 16,
              background: appt.isEarliest ? "#e0f7fa" : "#fff",
              padding: 12,
              borderRadius: 6,
            }}
          >
            <div>
              <strong>Patient:</strong> {appt.patientName}
            </div>
            <div>
              <strong>Time:</strong> {new Date(appt.time).toLocaleString()}
            </div>
            {appt.isEarliest && (
              <span style={{ color: "#00796b" }}>Earliest</span>
            )}
            <button
              style={{ marginTop: 8 }}
              onClick={() => handleCancel(appt.id)}
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>
      {cancelId && (
        <div style={{ marginTop: 16 }}>
          <h4>Cancel Appointment</h4>
          <input
            type="text"
            placeholder="Reason for cancellation"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            style={{ width: "100%", marginBottom: 8 }}
          />
          <button onClick={submitCancel}>Submit</button>
          <button style={{ marginLeft: 8 }} onClick={() => setCancelId(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
