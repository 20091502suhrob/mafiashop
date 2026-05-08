import { Section, Cell, Image, List, Badge } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

// Bu yerda skinlar ro'yxatini vaqtincha ma'lumot sifatida saqlaymiz
const SKINS = [
  { id: 1, name: "AK-47 | Empress", price: "25.50", rarity: "Covert", color: "#eb4b4b" },
  { id: 2, name: "M4A1-S | Printstream", price: "45.00", rarity: "Covert", color: "#eb4b4b" },
  { id: 3, name: "AWP | Atheris", price: "8.20", rarity: "Restricted", color: "#8847ff" },
  { id: 4, name: "Glove | Case Hardened", price: "120.00", rarity: "Extraordinary", color: "#ffd700" },
];

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        {/* Yuqori qism: Do'kon nomi */}
        <Section header="MAFIASHOP - CS2 MARKETPLACE">
          <Cell subtitle="Eng arzon va sifatli skinlar faqat bizda!">
            Xush kelibsiz, Do'stlar!
          </Cell>
        </Section>

        {/* Skinlar ro'yxati */}
        <Section header="Sotuvdagi Skinlar" footer="Sotib olish uchun skin ustiga bosing">
          {SKINS.map((skin) => (
            <Cell
              key={skin.id}
              before={
                <div style={{ 
                  width: 48, 
                  height: 48, 
                  backgroundColor: '#2b2b2b', 
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${skin.color}`
                }}>
                  {/* Bu yerga keyinchalik skin rasmini qo'yamiz */}
                  <span style={{ fontSize: '20px' }}>🔫</span>
                </div>
              }
              after={<Badge type="as-subtitle" mode="primary">${skin.price}</Badge>}
              subtitle={skin.rarity}
            >
              {skin.name}
            </Cell>
          ))}
        </Section>

        {/* Profil va Hamyon */}
        <Section header="Mening hisobim">
          <Cell subtitle="Balansni to'ldirish va sozlamalar">Hamyon (TON Connect)</Cell>
        </Section>
      </List>
    </Page>
  );
};