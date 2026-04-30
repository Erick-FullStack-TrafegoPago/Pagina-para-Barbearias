import { useState } from "react";
import { Send, MessageCircle, MapPin, Clock } from "lucide-react";
import { supabase } from "../supabaseConfig";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await supabase.from("contatos").insert([{ nome: form.name, telefone: form.phone, servico: form.service, mensagem: form.message, data_contato: new Date().toISOString() }]);
    } catch (err) { console.log("Supabase não configurado"); }
    const msg = `Olá Tio Jack! Vim pelo site.\n\n*Nome:* ${form.name}\n*Telefone:* ${form.phone}\n*Serviço:* ${form.service}\n*Observação:* ${form.message}`;
    window.open(`https://wa.me/5521966510777?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="contact section" id="contato">
      <div className="container contact__inner">
        <div className="contact__left">
          <p className="section-label">Agendamento</p>
          <h2 className="section-title">SEU HORÁRIO<br /><span>TE ESPERA</span></h2>
          <p className="contact__desc">Preencha o formulário e confirmo seu horário pelo WhatsApp. Rápido e sem complicação.</p>
          <div className="contact__channels">
            <a href="https://wa.me/55219xxxxxxxx" target="_blank" rel="noreferrer" className="contact__channel">
              <MessageCircle size={18} />
              <div><strong>WhatsApp</strong><span>(21) 96651-xxxx</span></div>
            </a>
            <div className="contact__channel">
              <MapPin size={18} />
              <div><strong>Localização</strong><span>São João de Meriti, RJ</span></div>
            </div>
          </div>
          <div className="contact__hours">
            <p className="contact__hours-title">Horário de funcionamento</p>
            <div className="contact__hours-grid">
              <span>Segunda a Sexta</span><span>9h às 20h</span>
              <span>Sábado</span><span>9h às 18h</span>
              <span>Domingo</span><span>Fechado</span>
            </div>
          </div>
          <div className="contact__fidelidade">
            <img src="/imgs/fidelidade.jpg" alt="Cartão Fidelidade Tio Jack" />
            <div>
              <strong>Cartão Fidelidade</strong>
              <p>Acumule 10 cortes e o 11º é gratuito. Com 20 cortes, ganhe uma tatuagem!</p>
            </div>
          </div>
        </div>
        <div className="contact__right">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Agendamento enviado!</h3>
              <p>Você foi redirecionado para o WhatsApp. Confirmaremos em instantes!</p>
              <button className="btn-outline" onClick={() => setSent(false)}>Fazer outro agendamento</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Seu nome *</label>
                  <input name="name" placeholder="Como você se chama?" value={form.name} onChange={handle} required />
                </div>
                <div className="form-group">
                  <label>WhatsApp *</label>
                  <input name="phone" placeholder="(21) 00000-0000" value={form.phone} onChange={handle} required />
                </div>
              </div>
              <div className="form-group">
                <label>Serviço desejado</label>
                <select name="service" value={form.service} onChange={handle}>
                  <option value="">Selecione...</option>
                  <optgroup label="✂️ Barbearia">
                    <option>Corte Masculino — R$ 35</option>
                    <option>Combo Ouro (Corte + Barba) — R$ 65</option>
                    <option>Barba Premium — R$ 40</option>
                    <option>Sobrancelha — R$ 15</option>
                    <option>Pacote Mensal — R$ 180</option>
                  </optgroup>
                  <optgroup label="🎨 Tattoo">
                    <option>Tattoo — Orçamento</option>
                    <option>Tattoo Freestyle — Orçamento</option>
                  </optgroup>
                  <optgroup label="💎 Piercing">
                    <option>1 Perfuração — R$ 29,99</option>
                    <option>2 Perfurações — R$ 54,99</option>
                    <option>3 Perfurações — R$ 79,99</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label>Alguma observação?</label>
                <textarea name="message" placeholder="Estilo, referência, horário preferido..." rows={3} value={form.message} onChange={handle} />
              </div>
              <button type="submit" className="btn-primary contact__submit">
                <span>Agendar pelo WhatsApp</span><Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
