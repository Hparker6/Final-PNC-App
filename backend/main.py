from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging
import os

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    message: str
    creditScore: int = None

# Predefined responses for different credit score ranges
CREDIT_RESPONSES = {
    'excellent': """
    Your credit score of {score} is excellent! Here are some tips to maintain it:
    1. Continue making all payments on time
    2. Keep your credit utilization low
    3. Monitor your credit report regularly
    4. Be selective about opening new credit accounts
    """,
    
    'good': """
    Your credit score of {score} is good! Here's how to improve it further:
    1. Pay down existing credit card balances
    2. Keep old credit accounts open
    3. Mix up your credit types
    4. Avoid applying for new credit unless necessary
    """,
    
    'fair': """
    Your credit score of {score} has room for improvement. Here's what you can do:
    1. Set up automatic payments to avoid missing due dates
    2. Try to get your credit utilization below 30%
    3. Check your credit report for errors
    4. Consider a secured credit card if needed
    """
}

# Common credit-related responses
COMMON_RESPONSES = {
    "help": "I can help you understand your credit score and provide tips for improvement. What specific aspect would you like to know about?",
    "improve": """Here are general tips to improve your credit score:
    1. Pay all bills on time
    2. Keep credit utilization below 30%
    3. Don't close old credit accounts
    4. Limit new credit applications
    5. Monitor your credit report regularly""",
    "factors": """The main factors affecting your credit score are:
    1. Payment History (35%)
    2. Credit Utilization (30%)
    3. Length of Credit History (15%)
    4. Credit Mix (10%)
    5. New Credit (10%)""",
    "default": "I'm here to help with credit-related questions. Feel free to ask about your credit score, how to improve it, or what factors affect it."
}

@app.post("/chat")
async def chat(message: ChatMessage):
    try:
        user_msg = message.message.lower()
        credit_score = message.creditScore

        # Determine credit score category
        if credit_score:
            if credit_score >= 740:
                response = CREDIT_RESPONSES['excellent'].format(score=credit_score)
            elif credit_score >= 670:
                response = CREDIT_RESPONSES['good'].format(score=credit_score)
            else:
                response = CREDIT_RESPONSES['fair'].format(score=credit_score)
        else:
            # Check for common keywords
            if "help" in user_msg or "start" in user_msg:
                response = COMMON_RESPONSES["help"]
            elif "improve" in user_msg or "better" in user_msg:
                response = COMMON_RESPONSES["improve"]
            elif "factor" in user_msg or "affect" in user_msg:
                response = COMMON_RESPONSES["factors"]
            else:
                response = COMMON_RESPONSES["default"]

        return {"response": response}
            
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
