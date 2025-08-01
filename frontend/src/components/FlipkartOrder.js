import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlipkartOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const orderDetails = {
    product: "Moto G86 Power",
    price: "₹15,999",
    specifications: {
      storage: "128GB",
      ram: "6GB",
      battery: "5000mAh",
      camera: "50MP Triple Camera"
    }
  };
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    
    // Simulate order placement process
    try {
      // Mock API call to place order
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful order placement
      const orderId = `FL${Date.now()}`;
      
      // Redirect to payment page with order details
      redirectToPayment(orderId);
    } catch (error) {
      alert("Failed to place order. Please try again.");
      setIsLoading(false);
    }
  };

  const redirectToPayment = (orderId) => {
    // In a real implementation, this would redirect to Flipkart's payment gateway
    // For demo purposes, we'll create a mock payment URL
    const paymentUrl = `https://www.flipkart.com/checkout/payment?order_id=${orderId}&product=moto-g86-power&amount=15999`;
    
    // Open payment page in new tab
    window.open(paymentUrl, '_blank');
    
    // Show success message
    alert(`Order placed successfully! Order ID: ${orderId}. Payment page opened in new tab.`);
    setIsLoading(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Order Moto G86 Power from Flipkart</h2>
      
      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <h3>{orderDetails.product}</h3>
        <p style={{ fontSize: "24px", color: "#388e3c", fontWeight: "bold" }}>{orderDetails.price}</p>
        
        <div style={{ marginBottom: "15px" }}>
          <h4>Specifications:</h4>
          <ul>
            <li>Storage: {orderDetails.specifications.storage}</li>
            <li>RAM: {orderDetails.specifications.ram}</li>
            <li>Battery: {orderDetails.specifications.battery}</li>
            <li>Camera: {orderDetails.specifications.camera}</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <h4>Features:</h4>
          <ul>
            <li>5G Ready</li>
            <li>Android 12</li>
            <li>Fast Charging</li>
            <li>Fingerprint Sensor</li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h4>Delivery Information:</h4>
        <p>• Free delivery available</p>
        <p>• Estimated delivery: 3-5 business days</p>
        <p>• Cash on Delivery available</p>
      </div>

      <button 
        onClick={handlePlaceOrder}
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? "#ccc" : "#ff6f00",
          color: "white",
          padding: "15px 30px",
          fontSize: "18px",
          border: "none",
          borderRadius: "5px",
          cursor: isLoading ? "not-allowed" : "pointer",
          width: "100%",
          marginBottom: "10px"
        }}
      >
        {isLoading ? "Placing Order..." : "Place Order & Go to Payment"}
      </button>

      <button 
        onClick={() => navigate("/chat")}
        style={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          padding: "10px 20px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Back to Chat
      </button>

      <div style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        <p>* This is a demo integration. In a real implementation, this would connect to Flipkart's actual API.</p>
        <p>* The payment URL will open Flipkart's website for the Moto G86 Power product page.</p>
      </div>
    </div>
  );
}

export default FlipkartOrder;