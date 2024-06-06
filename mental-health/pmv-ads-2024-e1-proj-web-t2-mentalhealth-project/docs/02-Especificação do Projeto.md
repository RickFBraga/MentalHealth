# Especificações do Projeto

## Perfis de Usuários

|Perfil 01| Trabalhador                 |
|--------------------|----------------------------------------------------------------------------|
|Descrição:  | Trabalhador que não tem tempo para se locomover a um consultório devido a seu trabalho               |
|Necessidades:       | 1. Acesso fácil e rápido a profissionais da área de bem-estar da saúde mental; 2. Realizar consultas on-line com profissional selecionado anteriormente; 3. Ter acesso ao histórico de consultas; 4. Formas facilitadas de pagamento.

|Perfil 02| Profissional da Saúde                 |
|--------------------|----------------------------------------------------------------------------|
|Descrição:  | Profissionais de saúde mental que desejam captar novos pacientes, ter uma agenda centralizada, acompanhamento do histórico de consultas e uma forma simplificada de recebimento que está buscando expandir sua base de pacientes.               |
|Necessidades:       | 1. Exposição a possíveis pacientes; 2. Gestão centralizada de agenda; 3. Acompanhamento do histórico de consultas; 4. Gestão e recebimento de pagamentos simplificado.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Médico  | ajudar pessoas com problemas relacionados a saúde mental           | poderem ter uma vida mais saudável               |
|Paciente       | acessar informações sobre saúde mental de uma forma mais simples e direta                 | entender melhor e aplicar as dicas no dia a dia                |
|Estudante  | ter consultas com médicos de forma rápida e prática           | ter suporte médico e para conseguir lidar com a pressão acadêmica                |
|Atleta       | acompanhamento personalizado de saúde mental                 | melhorar meu desempenho esportivo e lidar com a pressão competitiva                |
|Pais de crianças com transtornos mentais       | acesso a informações e apoio específico para lidar com os desafios da saúde mental infantil                 | melhorar o bem-estar e a qualidade de vida de meu filho             |
|Pessoa com Mobilidade Reduzida  | acesso a consultas médicas online para evitar as dificuldades de deslocamento físico           | receber cuidados médicos sem barreiras físicas e manter minha saúde mental em equilíbrio                |
|Psiquiatra        | fornecer consultas online para atender às necessidades de pacientes com mobilidade reduzida                 | promover a inclusão e a equidade na saúde mental, atendendo a pacientes com diversas capacidades e circunstâncias                |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir ao paciente cadastrar uma conta | ALTA | 
|RF-002| A aplicação deve permitir ao paciente fazer login em sua conta   | ALTA |
|RF-003| A aplicação deve permitir ao paciente verificar as informações registradas no cadastro na página de perfil, após realizar o login | MÉDIA | 
|RF-004| A aplicação deve permitir que o paciente acesse uma agenda com horários disponível para atendimento   | ALTA |
|RF-005| A aplicação deve oferecer um meio de processar o pagamento para o profissional receber o seu valor por consulta ao paciente | ALTA | 
|RF-006| A aplicação deve permitir ao profissional cadastre informações sobre seu currículo acadêmico   | ALTA |
|RF-007| A aplicação deve permitir que o profissional acesse uma área para gestão da agenda e atendimentos | ALTA | 
|RF-008| A aplicação deve permitir o profissional gerenciar histórico de atendimentos dos pacientes    | ALTA |
|RF-009| A aplicação deve permitir ao profissional verificar as informações registradas no cadastro na página perfil, após fazer seu login | MÉDIA |
|RF-010| Sistema de notificações por e-mail ou SMS para lembretes de consultas e atualizações importantes    | BAIXA |
|RF-011| A aplicação deve permitir ao paciente que acesse as anotações de consultas passadas    | MÉDIA |
|RF-012| Sistema de notificações por e-mail ou SMS para lembretes de consultas e atualizações importantes    | BAIXA |
|RF-013| A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar os profissionais cadastrados no sistema e de temas específicos | MÉDIA |

**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge | ALTA | 
|RNF-002| A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada |  ALTA | 
|RNF-002| A aplicação deve ser publicada em um ambiente acessível público na Internet |  ALTA | 
|RNF-002| Segurança dos dados do usuário, incluindo criptografia de informações sensíveis e conformidade com regulamentações de privacidade LGPD |  ALTA | 
|RNF-002| Requisições para o backend não devem superar os 5 segundos |  ALTA | 
|RNF-002| Interface intuitiva e fácil de usar para todos os perfis de usuários |  MÉDIA | 

**Prioridade: Alta / Média / Baixa.
