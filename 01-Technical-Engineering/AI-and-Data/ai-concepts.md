# AI & Data Concepts

---

### OCR (Optical Character Recognition)
- **Pronunciation**: "oh-see-AR" · أو سي آر
- **Arabic**: التعرف الضوئي على الحروف
- **Definition**: Technology that converts images of text (typed, handwritten, or printed) into machine-readable text. The pipeline typically involves image preprocessing, text detection, character recognition, and post-processing.
- **Context**: Document digitization, medical report processing, invoice automation.
- **Usage Examples**:
  - *Formal*: "We iterated the OCR pipeline from Tesseract to EasyOCR to PaddleOCR, validating accuracy against a benchmark image suite of 200+ real medical reports."
  - *Casual*: "The OCR is choking on blurry photos — we need better preprocessing before the text extraction step."
- **Common Mistake**: Expecting OCR to work perfectly out of the box. Real-world accuracy depends heavily on image quality, preprocessing (deskewing, contrast enhancement, noise removal), and the specific engine used. Always benchmark against your actual data.
- **Related Terms**: Tesseract, PaddleOCR, EasyOCR, Image Preprocessing, Computer Vision

---

### LLM (Large Language Model)
- **Pronunciation**: "el-el-EM" · إل إل إم
- **Arabic**: نموذج لغوي كبير
- **Definition**: A neural network trained on massive text datasets, capable of understanding and generating human language. Modern LLMs (GPT, Claude, Gemini) can follow instructions, reason about problems, write code, and process structured data.
- **Context**: AI feature development, prompt engineering, chatbots, data extraction.
- **Usage Examples**:
  - *Formal*: "The parsed OCR text is fed into a Gemini LLM to extract structured JSON data, matching lab results against a reference catalog through a five-stage pipeline."
  - *Casual*: "Can we just prompt the LLM to clean up the messy OCR output instead of writing regex?"
- **Common Mistake**: Treating LLM outputs as deterministic. The same prompt can produce different outputs across runs. For production systems, add validation, confidence scoring, and human review queues rather than blindly trusting the model.
- **Related Terms**: Generative AI, Prompt Engineering, Fine-tuning, Tokens, Context Window

---

### Prompt Engineering
- **Pronunciation**: "PROMPT en-juh-NEER-ing" · بْرومبت إنجِنيرينج
- **Arabic**: هندسة الأوامر النصية
- **Definition**: The practice of crafting precise instructions (prompts) to guide an LLM toward producing accurate, useful, and consistent outputs. Includes techniques like few-shot examples, chain-of-thought reasoning, and system prompts.
- **Context**: Building AI features, chatbot development, data extraction with LLMs.
- **Usage Examples**:
  - *Formal*: "Through careful prompt engineering, we reduced the LLM's hallucination rate on lab-result matching from 12% to under 2%."
  - *Casual*: "The prompt needs more examples — it keeps extracting the wrong field."
- **Common Mistake**: Writing vague prompts and blaming the model. Specificity matters enormously. Instead of "extract the data," say "extract the patient name, test name, and result value as a JSON object with these exact keys."
- **Related Terms**: Few-shot Learning, Chain-of-Thought, System Prompt, Temperature

---

### Embeddings
- **Pronunciation**: "em-BED-ingz" · إمبِدينجز
- **Arabic**: التمثيلات المتجهية
- **Definition**: Dense numerical vectors that represent the semantic meaning of text, images, or other data. Similar items have vectors that are close together in the embedding space, enabling semantic search and similarity comparisons.
- **Context**: RAG systems, semantic search, recommendation engines, clustering.
- **Usage Examples**:
  - *Formal*: "We generate embeddings for every knowledge-base article and store them in a vector database, enabling the RAG pipeline to retrieve semantically relevant documents."
  - *Casual*: "The search results improved massively once we switched from keyword matching to embedding-based similarity."
- **Common Mistake**: Using the wrong embedding model for your domain. General-purpose embeddings (like OpenAI's) work well for broad text, but domain-specific fine-tuned models perform significantly better for specialized content (medical, legal, etc.).
- **Related Terms**: Vector Database, Cosine Similarity, Semantic Search, RAG
